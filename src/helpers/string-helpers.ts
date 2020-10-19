import sanitizeHtml from 'sanitize-html';

export const capitalize = (str: string): string => {
  const capitalizedStr = str.slice(0, 1).toUpperCase() + str.slice(1);
  return capitalizedStr;
}

export const sanitize = (str: string): string => {
  return sanitizeHtml(str.trim());
}