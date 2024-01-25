import { GenericItemDto } from "../dto/genericItemDto.dto";

export interface IBothService {
  findAll(): Promise<GenericItemDto[]>;
}