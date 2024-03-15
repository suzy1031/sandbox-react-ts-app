export const splitAndJoin = (input: string): string => {
  const splitString = input.split(/(?=[A-Z])/);
  const lowerCaseString = splitString.map((word) => word.toLowerCase());

  return lowerCaseString.join('-');
};
