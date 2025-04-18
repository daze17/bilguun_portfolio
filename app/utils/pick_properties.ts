export const pickProperties = <T extends Object, K extends keyof T>(
  object: T,
  keys: { [P in K]?: true }
): { [P in K]: T[P] } => {
  return Object.fromEntries(
    Object.entries(object).filter(
      ([key]) => keys.hasOwnProperty(key) && keys[key as K]
    )
  ) as any;
};
