import { parse } from "https://deno.land/std/flags/mod.ts";
import { main } from "./server.ts";

main(parse(Deno.args));
