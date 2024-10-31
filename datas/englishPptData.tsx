type SlideType = {
  title: string;
  description: string;
};

type DataType = {
  lector: string;
  way: string;
  slides: SlideType[];

  description: string;
};

export const EnglishLearningWaysData: DataType[] = [
  {
    lector: "Damdinnym",
    way: "Repeat learning every day",
    slides: [
      {
        title: "Why it is best to learn English",
        description: "Sample Description",
      },
      {
        title: "how to study this skill?",
        description: "Sample Description",
      },
    ],
    description: "Sample Description",
  },
  {
    lector: "Ankhbayar",
    way: "Repeat learning every day",
    slides: [
      {
        title: "Why it is best to learn English",
        description: "Sample Description",
      },
      {
        title: "how to study this skill?",
        description: "Sample Description",
      },
    ],
    description: "Sample Description",
  },
  {
    lector: "Odgarag",
    way: "Repeat learning every day",
    slides: [
      {
        title: "Why it is best to learn English",
        description: "Sample Description",
      },
      {
        title: "how to study this skill?",
        description: "Sample Description",
      },
    ],
    description: "Sample Description",
  },
];
