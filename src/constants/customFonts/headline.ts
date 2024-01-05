type HeadlineComponent = "h1" | "h2" | "h3" | "h4" | "h5";
type Variant = "xxl" | "xl" | "l" | "m" | "s";

type HeadlineBase = {
  [key in Variant]: { component: HeadlineComponent; fontSize: number };
};

export const headline: HeadlineBase = {
  xxl: {
    component: "h1",
    fontSize: 24,
  },
  xl: {
    component: "h2",
    fontSize: 20,
  },
  l: {
    component: "h3",
    fontSize: 18,
  },
  m: {
    component: "h4",
    fontSize: 16,
  },
  s: {
    component: "h4",
    fontSize: 14,
  },
};

export type Headline = keyof typeof headline;
