import { DataType } from "../dataTypes.ts";

interface Processor {
  process: (command: string | null, args: (string | null)[]) => DataType;
}

export default Processor;
