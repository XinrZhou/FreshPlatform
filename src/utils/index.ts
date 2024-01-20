export const getPrice = (price: number) => {
  const priceArr: Array = [];
  priceArr[0] = price?.toString()?.split('.')[0];
  priceArr[1] = price?.toString()?.split('.')[1];

  return priceArr;
}
