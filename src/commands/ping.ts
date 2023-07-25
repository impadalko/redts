import { DataType, SimpleStringType } from "../dataTypes.ts";
import Processor from "./processor.ts";

const pingProcessor: Processor = {
  process(_command: string | null, _args: (string | null)[]): DataType {
    return new SimpleStringType("PONG");
  },
};

export default pingProcessor;
