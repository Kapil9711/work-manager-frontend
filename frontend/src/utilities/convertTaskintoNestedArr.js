const converToNestedArr = (arr) => {
  const nestedArr = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
    if (temp.length === 3 || i === arr.length - 1) {
      nestedArr.push([...temp]);
      temp.length = 0;
    }
  }
  return nestedArr;
};

export default converToNestedArr;
