type SlideType = {
  title: string;
  description: string[];
  image?: string;
};

export type DataType = {
  lector: string;
  way: string;
  image?: string;
  slides: SlideType[];

  description: string;
};
