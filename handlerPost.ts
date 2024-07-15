import { Resend } from "npm:resend";
import { PREFIX } from "./constants.ts";
import { renderEmailAdminFeedback } from "./emails/admin-feedback.tsx";
import { ulid } from "https://deno.land/x/ulid@v0.3.0/mod.ts";

const resend = new Resend(Deno.env.get("API_KEY_RESEND"));

const handlerPost = async (request: Request, kv: Deno.Kv) => {
  const body: {
    name: string;
    stack: string;
    who: string;
    interval: string;
    feedback: string;
  } = await request.json();
  const data = {
    timestamp: new Date().toISOString(),
    ...body,
  };

  await kv.set([PREFIX, ulid()], data);

  const email = renderEmailAdminFeedback(body);

  const { error } = await resend.emails.send({
    from: "NN1 Dev Club <club@nn1.dev>",
    to: Deno.env.get("EMAIL_RECIPIENT")!,
    subject: "✨ New feedback",
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
