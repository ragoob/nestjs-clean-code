import { Product } from "../entities/product.entity";

export interface ProductRepository{
  add(product: Product): void;
  remove(product: Product): void;
  getById(id: string): Promise<Product>;
  getAll(): Promise<Product[]>;
}