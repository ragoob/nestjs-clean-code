import { ProductRepositoryImpl } from "../infrastructure/repositories/product.repository";
import { UnitOfWorkImpl } from "../infrastructure/unitofWork";
import { ProductServiceImpl } from "../services/implementation/product.service.impl";

export const IocConfigration: any[] = [
       {
        provide: 'PRODUCT_REPOSITORY_INJECTOR',
        useClass: ProductRepositoryImpl
       },

       {
        provide: 'UNIT_OF_WORK_INJECTOR',
        useClass: UnitOfWorkImpl
       },

       {
        provide: 'PRODUCT_SERVICE_INJECTOR',
        useClass: ProductServiceImpl
       },
]