import { ProductDto } from "../Dtos/product.dto";

export interface ProductService{
    createNewProduct(product: ProductDto): Promise<ProductDto>;
    updateProduct(product: ProductDto): Promise<void>;
    deleteProduct(id: string): Promise<void>;
    getProducts(): Promise<ProductDto[]>;
    getProductById(id: string): Promise<ProductDto>;
}