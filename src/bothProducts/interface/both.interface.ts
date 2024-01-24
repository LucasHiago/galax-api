import { BothDto } from "../dto/both.dto";

export interface IBothService {
  findAll(): Promise<BothDto>;
}