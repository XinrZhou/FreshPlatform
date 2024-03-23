export interface User {
  id?: string
  name?: string
  number?: string
  password?: string
  suppiler?: string
  consumer?: string
  avatar?: string
  insertTime?: string
  updateTime?: string
};

export interface Cart {
  id?: string,
  userId?: string
  skuId?: string
  count?: number
  type?: number
  insertTime?: string
  updateTime?: string
};

export interface Order {
  id?: string,
  userId?: string
  addressSpec?: string
  orderSpec?: string
  type?: number
  status?: number
  price?: number
  remark?: string
  insertTime?: string
  updateTime?: string
}

export interface Brand {
  id?: string
  name?: string
  userId?: string
  categoryId?: string
  status?: number
  reason?: string
  insertTime?: string
  updateTime?: string
};

export interface Product {
  id?: string
  name?: string
  title?: string
  categoryId?: string
  brandId?: string
  imageUrl?: string
  detailImageUrl?: string
  originPrice?: number
  discountPrice?: number
  saleStatus?: number
  description?: string
  insertTime?: string
  updateTime?: string
};

interface ResultConfig {
  Resolution?: string
}

export interface TextToImage {
  prompt?: string
  negativePrompt? : string
  resultConfig?: ResultConfig
  styles?: string[]
  logoAdd?: string
  rspImgType?: string
}

export interface Image {
  id?: string
  userId?: string
  prompt?: string
  resolution?: string
  imageUrl?: string
  insertTime?: string
  updateTime?: string
}

export interface ResourceUsage {
  userId?: string
  path?: string
  value?: object
}

export interface Resource {
  id?: string
  name?: string
  type?: number
  status?: number
  description?: string
  price?: number
  unit?: string
  insertTime?: string
  updateTime?: string
}

export interface Model {
  id?: string
  version?: string
  type?: number
  status?: number
  params?: string
  insertTime?: string
  updateTime?: string
}