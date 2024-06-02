/// <reference types="node" />
declare module "crossencoder" {
  export class CrossEncoder {
    private modelPath;
    private spp;
    constructor(modelPath: string);
    loadModel(): Promise<void>;
    pad(length: number, ids: number[]): number[];
    encodeSample(sample: string): Promise<number[]>;
    encodeSamples(samples: string[]): Promise<number[][]>;
    encode(sample: string, samples: string[]): Promise<number[]>;
  }
}
