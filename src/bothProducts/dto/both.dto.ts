import { ComboItem } from "src/comboItem/entities/comboitem.entity";
import { Product } from "src/products/entities/product.entity";
import { Services } from "src/services/entities/services.entity";


export class BothDto {
  products: Product[];
  services: Services[];
  combos: ComboItem[];
}