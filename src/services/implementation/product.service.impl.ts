import { Inject } from "@nestjs/common";
import { Injector } from "@nestjs/core/injector/injector";
import { Product } from "../../core/entities/product.entity";
import { ProductRepository } from "../../core/repositories/product.repository";
import { UnitOfWork } from "../../core/unitOfwork";
import { ProductDto } from "../Dtos/product.dto";
import { ProductService } from "../interfaces/product.service.intefrace";

export class ProductServiceImpl implements ProductService{
    private readonly _repository: ProductRepository;
    private readonly _unitOfWork: UnitOfWork;
    constructor(@Inject('PRODUCT_REPOSITORY_INJECTOR') repository: ProductRepository,@Inject('UNIT_OF_WORK_INJECTOR') unitOfWork: UnitOfWork){
      this._repository = repository;
      this._unitOfWork = unitOfWork;
    }
    async createNewProduct(product: ProductDto): Promise<ProductDto> {
     const productEntity: Product = new Product();
      this._repository.add(productEntity);
      await this._unitOfWork.commitChanges();
      product.id= productEntity.id;
      return product;
    }
    async updateProduct(product: ProductDto): Promise<void> {
     await this._unitOfWork.update(product);
     return this._unitOfWork.commitChanges();
    }
    async deleteProduct(id: string): Promise<void> {
      const product = await this._repository.getById(id);
      this._repository.remove(product);
      return this._unitOfWork.commitChanges();
    }
    async getProducts(): Promise<ProductDto[]> {
      const list =   await this._repository.getAll()
        return list.map(p=> {
            return  {
                id: p.id,
                name: p.name,
                price: p.price
            } as ProductDto
        });
    }

    async getProductById(id: string): Promise<ProductDto> {
      const product =   await this._repository.getById(id);
      return product as ProductDto;
    }

}