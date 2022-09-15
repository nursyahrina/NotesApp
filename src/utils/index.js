const showFormattedDate = ([date, locale]) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  if (locale === 'id') {
    return new Date(date).toLocaleDateString('id-ID', options);
  }
  return new Date(date).toLocaleDateString('en-ID', options);
};

export default showFormattedDate;
