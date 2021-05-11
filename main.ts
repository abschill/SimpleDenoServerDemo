import { serve } from "https://deno.land/std@0.95.0/http/server.ts";
import handleDefault from './handlers/index.ts';
const server = serve({ port: 8003 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/`);

for await (const request of server) handleDefault(request);   