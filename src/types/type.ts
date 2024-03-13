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

export interface Category {
  id?: string,
  name?: string
  parentId?: string
  level?: number
  status?: number
  insertTime?: string
  updateTime?: string
};

export interface Rdc {
  id?: string
  name?: string
  province?: string
  city?: string
  district?: string
  address?: string[]
  detail?: string
  insertTime?: string
  updateTime?: string
};

export interface Attribute {
  id?: string
  categoryId?: string
  name?: string
  isNumeric?: number
  unit?: string
  isGeneric?: number
  value?: string
  insertTime?: string
  updateTime?: string
};

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

export interface Sku {
  id?: string
  name?: string
  spuId?: string
  imageUrl?: string
  stock?: number
  originPrice?: number
  discountPrice?: number
  enable?: number
  genericSpec?: string
  specialSpec?: string
  insertTime?: string
  updateTime?: string
};

export interface RdcSpu {
  id?: string
  rdcId?: string
  rdcName?: string
  spuId?: string
  spuName?: string
  insertTime?: string
  updateTime?: string
}

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