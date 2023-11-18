const options: Intl.DateTimeFormatOptions | undefined = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
}

export function getFormattedDate(date: Date | string) {
  if (typeof date === 'string') {
    return new Date(date).toLocaleDateString("en-GB", options);
  }
  return date.toLocaleDateString("en-GB", options);
}
