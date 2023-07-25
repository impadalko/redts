import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

import pingProcessor from "src/commands/ping.ts";

describe("Ping Processor", () => {
  it("should return a simple string containing pong", () => {
    const output = pingProcessor.process("", []);

    assertEquals(output.type, "simpleString");
    assertEquals(output.payload, "PONG");
  });
});
