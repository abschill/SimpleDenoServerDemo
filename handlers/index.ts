import { ServerRequest } from "https://deno.land/std@0.95.0/http/server.ts";

function handleDefault(req:ServerRequest){
    let bodyContent = "Your user-agent is:\n\n";
    bodyContent += req.headers.get("user-agent") || "Unknown";
    req.respond({ status: 200, body: bodyContent });
}

export default handleDefault;