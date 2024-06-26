import { PREFIX } from "./constants.ts";

const handlerDelete = async (request: Request, kv: Deno.Kv) => {
  const body: { timestamp: string } = await request.json();
  await kv.delete([PREFIX, parseInt(body.timestamp)]);

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

export default handlerDelete;
