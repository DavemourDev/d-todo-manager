const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export const checkISODate = (input: string): boolean => {
  const isIsoDate = ISO_DATE_PATTERN.test(input); 
  return isIsoDate;
}