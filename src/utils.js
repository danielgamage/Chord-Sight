// from https://stackoverflow.com/questions/5752002/find-all-possible-subset-combos-in-an-array
export const getAllCombinations = (input, size) => {
  var results = [],
    result,
    mask,
    i,
    total = Math.pow(2, input.length);
  for (mask = size; mask < total; mask++) {
    result = [];
    i = input.length - 1;

    do {
      if ((mask & (1 << i)) !== 0) {
        result.push(input[i]);
      }
    } while (i--);

    if (result.length >= size) {
      results.push(result);
    }
  }

  return results;
};

export const removeDuplicatesSimple = (array) => {
  return array.filter(function (item, pos, self) {
    return self.indexOf(item) == pos;
  });
};
export const removeDuplicates = (array, path) => {
  return array.filter(function (el, i, arr) {
    return (
      arr
        .map(function (mapObj) {
          return walk(mapObj, path);
        })
        .indexOf(walk(el, path)) === i
    );
  });
};

export const walk = (el, path) => {
  var array = path.split(".");
  array.map(function (pathSegment) {
    el = el[pathSegment];
  });
  return el;
};
