import { DataType, ErrorType } from "../dataTypes.ts";
import Processor from "./processor.ts";

const unknownProcessor: Processor = {
  process(command: string | null, _args: (string | null)[]): DataType {
    return new ErrorType(`Unknown command ${command}`);
  },
};

export default unknownProcessor;
