import { PREFIX } from "./constants.ts";

const handlerDelete = async (request: Request, kv: Deno.Kv) => {
  const pattern = new URLPattern({
    pathname: "/:feedbackId?",
  });
  const patternResult = pattern.exec(request.url);
  const feedbackId = patternResult?.pathname.groups.feedbackId;

  if (!feedbackId) {
    return Response.json(
      {
        status: "success",
        statusCode: 400,
        data: null,
        error: "Invalid request.",
      },
      { status: 400 },
    );
  }
  await kv.delete([PREFIX, feedbackId]);

  return Response.json(
    {
      status: "success",
      statusCode: 200,
      data: feedbackId,
      error: null,
    },
    { status: 200 },
  );
};

export default handlerDelete;
