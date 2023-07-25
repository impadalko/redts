import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

import { ErrorType, SimpleStringType } from "src/dataTypes.ts";

const payload = "PAYLOAD";

describe("Error", () => {
  it("should have the correct type string", () => {
    const error = new ErrorType(payload);

    assertEquals(error.type, "error");
  });

  it("should encode with a minus prefix", () => {
    const error = new ErrorType(payload);

    assertEquals(error.encode(), `-${payload}\r\n`);
  });
});

describe("Simple String", () => {
  it("should have the correct type string", () => {
    const simpleString = new SimpleStringType(payload);

    assertEquals(simpleString.type, "simpleString");
  });

  it("should encode with a plus prefix", () => {
    const simpleString = new SimpleStringType(payload);

    assertEquals(simpleString.encode(), `+${payload}\r\n`);
  });
});
