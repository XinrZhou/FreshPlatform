export const getPrice = (price: number) => {
  const priceArr: Array = [];
  priceArr[0] = price?.toString()?.split('.')[0];
  priceArr[1] = price?.toString()?.split('.')[1];

  return priceArr;
}

// 获取商品总价
export const getTotalPrice = (dataList: Array) => {
  let totalPrice = 0;
  dataList?.forEach((item) => {
    totalPrice += item.price * item.count;
  });
  return totalPrice.toFixed(2);
}
