import axios from "axios";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export const getTodo = async () => {
  const { data } = await axios.get<Product[]>("https://dummyjson.com/products");

  return data;
};
