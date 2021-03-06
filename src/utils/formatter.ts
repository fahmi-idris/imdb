export const toLocaleDate = (dateTime: string): string => {
  const date = new Date(dateTime);
  return date.toLocaleString('id-ID', {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  });
};

export const toUppercase = (value: string): string => value.toUpperCase();

export const toCapitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
