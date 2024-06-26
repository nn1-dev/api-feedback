import { PREFIX } from "./constants.ts";

const handlerPost = async (request: Request, kv: Deno.Kv) => {
  const body: Entry = await request.json();
  const timestamp = new Date().toISOString();

  await kv.set([PREFIX, timestamp], {
    timestamp,
    ...body,
  });

  return Response.json(
    {
      status: "success",
      statusCode: 200,
      data: body,
      error: null,
    },
    { status: 200 },
  );
};

export default handlerPost;
