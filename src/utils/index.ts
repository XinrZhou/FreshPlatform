/**
 * 获取价格整数、小数
 * @param price 
 * @returns 
 */
export const getPrice = (price: number) => {
  const priceArr: string[] = [];
  priceArr[0] = price?.toString()?.split('.')[0];
  const decimalPart = price?.toString()?.split('.')[1];
  
  // 如果有小数部分
  if (decimalPart) {
    // 去除末尾的0，直到遇到非0的数字或小数点
    let trimmedDecimalPart = decimalPart.replace(/0+$/, '');
    // 如果小数部分不为空，或者整个小数部分都是0时，则添加到数组中
    if (trimmedDecimalPart || trimmedDecimalPart === "0") {
      priceArr[1] = trimmedDecimalPart;
    }
  }

  return priceArr;
}

/**
 * 已选商品映射
 * @param selectedList 已选择购物车列表
 * @param cartList 购物车所有商品列表
 * @returns 
 */
export const mapSelectedList = (selectedList: Array, cartList: Array) => {
  return cartList.map((cartItem) => {
    if (selectedList.includes(cartItem.id)) {
      return cartItem;
    }
  })
}

/**
 * 获取购物车总价
 * @param selectedList 已选择购物车列表
 * @returns 购物车总价
 */
export const getTotalPrice = (selectedList: Array): number => {
  if (!selectedList.length) return 0;

  const totalPrice = selectedList.reduce((totalPrice, selectedItem) => {
    const itemPrice = selectedItem?.discountPrice || 0;
    const itemCount = selectedItem?.count || 0;
    return totalPrice + (itemPrice * itemCount);
  }, 0);

  return parseFloat(totalPrice.toFixed(2));
}






