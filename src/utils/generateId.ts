// Utility function to generate unique IDs without using Math.random()
let counter = 0;

export const generateId = (): string => {
  counter += 1;
  return `${Date.now()}-${counter}`;
};