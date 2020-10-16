const LOCALE = "es-ES";

export const dateToLocaleString = (date: Date): string => {

  return date.toLocaleDateString(LOCALE);

};

export const dateToIsoString = (date?: Date) => {
  return date != null ? date.toISOString().substring(0, 10) : '';
};