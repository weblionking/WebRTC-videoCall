
module.exports = () => {
  const MIN = 10000000;
  const MAX = 99999999;
  const num = Math.floor(Math.random() * ((MAX + 1) - MIN)) + MIN;

  return `${num}`;
};
