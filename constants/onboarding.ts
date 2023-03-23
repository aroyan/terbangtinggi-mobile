export type OnboardingData = {
  id: number;
  title: string;
  description: string;
  image: any;
};

export const ONBOARDING_DATA = [
  {
    id: 1,
    title: "Various Payment Methods",
    description: "Various Payment Methods, whatever you want to choose",
    image: require("../assets/onboarding/one.png"),
  },
  {
    id: 2,
    title: "Traveling with Ease",
    description: "Let's explore the world",
    image: require("../assets/onboarding/two.png"),
  },
  {
    id: 3,
    title: "No Hidden Fee",
    description:
      "You don't need to worry about hidden fee, all fees are transparent",
    image: require("../assets/onboarding/three.png"),
  },
];
