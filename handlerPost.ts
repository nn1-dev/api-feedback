import { Resend } from "npm:resend";
import { PREFIX } from "./constants.ts";
import { renderEmailFeedback } from "./emails-new/feedback.tsx";

const resend = new Resend(Deno.env.get("API_KEY_RESEND"));

const handlerPost = async (request: Request, kv: Deno.Kv) => {
  const body: Entry = await request.json();
  const data = {
    timestamp: new Date().toISOString(),
    ...body,
  };

  await kv.set([PREFIX, crypto.randomUUID()], data);

  const email = renderEmailFeedback(body);

  const { error } = await resend.emails.send({
    from: "NN1 Dev Club <club@nn1.dev>",
    to: Deno.env.get("EMAIL_RECIPIENT")!,
    subject: "Feedback",
    html: email.html,
    text: email.text,
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
