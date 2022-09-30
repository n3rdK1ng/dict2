export const compareObjectValue = (obj: IGenericObject, key: string, value: string) =>
  obj[key] === value;

export const compareObjectKey = (obj: IGenericObject, key: string, value: string) =>
  value === obj[key];

