const binarySearch = (list, item) => {
  const mid = Math.floor((list.length + 1) / 2);
  if (item === list[mid]) {
    return list[mid];
  } else if (item > list[mid]) {
    return binarySearch(list.slice(mid), item);
  } else if (item < list[mid]) {
    return binarySearch(list.slice(0, mid), item);
  }
  return console.log('none');
};

const list = [1, 3, 4, 6, 7, 9, 10, 12, 15, 17, 18];
binarySearch(list, 13);
