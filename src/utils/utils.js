const splitStringToArray = (string, symbol) => string.split(symbol);

const _reduce = (f, accumulate, iterator) => {
  if (!iterator) {
    iterator = accumulate[Symbol.iterator]();
    accumulate = iterator.next().value;
  }
  for (const a of iterator) {
    accumulate = f(accumulate, a);
  }
  return accumulate;
};

const _pipe =
  (...functions) =>
  (x) =>
    _reduce((v, fn) => fn(v), x, functions);

export { _reduce, _pipe, splitStringToArray };
