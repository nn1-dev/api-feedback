import { PREFIX } from "./constants.ts";

const handlerPost = async (request: Request, kv: Deno.Kv) => {
  const body: Entry = await request.json();

  await kv.set([PREFIX, Date.now()], body);

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
