import { Args } from "https://deno.land/std/flags/mod.ts";

const name = "redts-server";
const version = "1.0.0";

function printHelp(): void {
  printVersion();
  console.log("Starts a redts-server.");
  console.log("");
  console.log(`Usage: ${name} [OPTIONS]`);
  console.log("  -p <port>          Server port (default: 6379).");
  console.log("  --help             Output this help and exit.");
  console.log("  --version          Output version and exit.");
}

function printVersion(): void {
  console.log(`${name} ${version}`);
}

let server: Deno.Listener;

export async function main(args?: Args): Promise<void> {
  if (args?.help) {
    printHelp();
    return;
  }

  if (args?.version) {
    printVersion();
    return;
  }

  const port = args?.p ?? 6379;
  server = Deno.listen({ port });
  console.log(`Listening on 0.0.0.0:${port}`);

  for await (const conn of server) {
    conn.readable.pipeTo(conn.writable);
  }

  shutdown();
}

Deno.addSignalListener("SIGINT", () => {
  shutdown();
  Deno.exit();
});

function shutdown(): void {
  console.log("Closing the server.");
  server.close();
}
