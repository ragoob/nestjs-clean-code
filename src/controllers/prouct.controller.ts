import { Controller, Get, Inject, Param } from "@nestjs/common";
import { ProductDto } from "../services/Dtos/product.dto";
import { ProductService } from "../services/interfaces/product.service.intefrace";

@Controller()
export class ProductController{
       constructor(@Inject('PRODUCT_SERVICE_INJECTOR') private readonly productService: ProductService){

       }

     @Get('')
     public getProducts(): Promise<ProductDto[]>{
       return this.productService.getProducts();
     }

     @Get(':id')
     public getProductById(@Param('id') id: string): Promise<ProductDto>{
       return this.productService.getProductById(id);
     }
}