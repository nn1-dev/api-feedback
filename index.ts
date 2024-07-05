// import { PREFIX } from "./constants.ts";
import handlerDelete from "./handlerDelete.ts";
import handlerPost from "./handlerPost.ts";
import handlerGet from "./handelerGet.ts";

const kv = await Deno.openKv();

const HANDLER_MAPPER: Record<
  string,
  (request: Request, kv: Deno.Kv) => Promise<Response>
> = {
  GET: handlerGet,
  POST: handlerPost,
  DELETE: handlerDelete,
};

Deno.serve(async (request) => {
  const auth = request.headers.get("Authorization");

  if (auth !== `Bearer ${Deno.env.get("API_KEY")}`) {
    return Response.json(
      {
        status: "error",
        statusCode: 401,
        data: null,
        error: "Nice try 👍",
      },
      { status: 401 },
    );
  }

  return await HANDLER_MAPPER[request.method](
    request,
    kv,
  );
});
