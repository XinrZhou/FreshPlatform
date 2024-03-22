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
 * 获取购物车总价
 * @param selectedList 已选择购物车列表
 * @param cartList 购物车所有商品列表
 * @returns 
 */
export const getTotalPrice = (selectedList: Array, cartList: Array) => {
  return cartList.reduce((totalPrice, cartItem) => {
    if (selectedList.includes(cartItem.id)) {
      totalPrice += cartItem.discountPrice * cartItem.count;
    }
    return totalPrice;
  }, 0).toFixed(2);
}


