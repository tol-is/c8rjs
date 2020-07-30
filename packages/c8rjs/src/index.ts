

export interface CompositorConfig {
	baseline: number;
  rem: number;
	fonts: FontConfig;
}

export interface FontConfig {
  [key: string]: FontOpenType;
}

export interface FontOpenType {
	familyName: string;
	fallback: string;
	upm: number;
	xHeight?: number;
  capHeight: number;
  lineGap: number;
	ascent: number;
	descent: number;
	weight: number;
  italic: boolean;
}


export class c8rjs {
    config: CompositorConfig;

    constructor(config:CompositorConfig, theme:any) {
      this.config = config;
    }
}

export default c8rjs;
