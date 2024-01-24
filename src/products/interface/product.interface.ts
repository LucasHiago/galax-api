import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

export interface IProductService {
  create(createProductDto: CreateProductDto): Promise<Product>;
  findAll(): Promise<Product[]>;
  findOne(id: number): Promise<Product>;
  update(id: number, updateProductDto: UpdateProductDto): Promise<Product>;
  remove(id: number): Promise<void>;
}