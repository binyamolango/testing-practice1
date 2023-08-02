const capitalize = (string) => {
  const firstLetter = string[0].toUpperCase();
  return firstLetter + string.substring(1, string.length);
};

module.exports = capitalize;