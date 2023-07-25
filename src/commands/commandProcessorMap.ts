import Processor from "./processor.ts";
import pingProcessor from "./ping.ts";
import unknownProcessor from "./unknown.ts";

const processorMap = new Map<string, Processor>();
processorMap.set("PING", pingProcessor);

const commandProcessorMap = {
  get(command: string | null): Processor {
    return command
      ? processorMap.get(command.toUpperCase()) ?? unknownProcessor
      : unknownProcessor;
  },
};

export default commandProcessorMap;
