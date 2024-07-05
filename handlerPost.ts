import { Resend } from "npm:resend";
import { PREFIX } from "./constants.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const handlerPost = async (request: Request, kv: Deno.Kv) => {
  const body: Entry = await request.json();
  const data = {
    timestamp: new Date().toISOString(),
    ...body,
  };

  await kv.set([PREFIX, crypto.randomUUID()], data);

  const { error } = await resend.emails.send({
    from: "NN1 Dev Club <club@nn1.dev>",
    to: ["club@nn1.dev"],
    subject: "Feedback",
    html: "<strong>it works!</strong>",
  });

  if (error) {
    return Response.json(
      {
        status: "error",
        statusCode: 400,
        data: null,
        error,
      },
      { status: 400 },
    );
  }

  return Response.json(
    {
      status: "success",
      statusCode: 200,
      data,
      error: null,
    },
    { status: 200 },
  );
};

export default handlerPost;
