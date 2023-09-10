import Processor from "./processor.ts";
import pingProcessor from "./ping.ts";
import unknownProcessor from "./unknown.ts";

const processorMap = new Map<string, Processor>();
processorMap.set("PING", pingProcessor);

const commandProcessorMap = {
  get(command: string): Processor {
    return processorMap.get(command.toUpperCase()) ?? unknownProcessor;
  },
};

export default commandProcessorMap;
