/**
 * 获取价格整数、小数
 * @param price 
 * @returns 
 */
export const getPrice = (price: number) => {
  const priceArr: Array = [];
  priceArr[0] = price?.toString()?.split('.')[0];
  priceArr[1] = price?.toString()?.split('.')[1];

  return priceArr;
}

/**
 * 获取购物车商品总价
 * @param dataList 
 * @returns 
 */
export const getTotalPrice = (dataList: Array) => {
  let totalPrice = 0;
  dataList?.forEach((item) => {
    totalPrice += item.price * item.count;
  });
  return totalPrice.toFixed(2);
}


