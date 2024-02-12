export interface ProductProps {
  product: ProductDataProps;
  edit?: boolean;
}

export interface ProductDataProps {
  id: number;
  imageUrl: string;
  name: string;
  introduce: string;
  date: string;
  price: number;
}
