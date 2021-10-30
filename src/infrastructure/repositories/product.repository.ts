import { Product } from "../../core/entities/product.entity";
import { ProductRepository } from "../../core/repositories/product.repository";

export class ProductRepositoryImpl implements ProductRepository{
    add(product: Product): void {
        console.log(`Added new product`)
    }
    remove(product: Product): void {
        console.log(`Removed  product`)
    }
    getById(id: string): Promise<Product> {
     return Promise.resolve({
         id: 'test-1',
         name: 'test-1-name',
         price: 50
     });
    }
    getAll(): Promise<Product[]> {
        return Promise.resolve([
            {
                id: 'test-1',
                name: 'test-1-name',
                price: 50
            }
        ]);
    }

}