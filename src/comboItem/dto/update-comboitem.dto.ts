import { PartialType } from '@nestjs/mapped-types';
import { CreateComboItemDto } from './create-comboitem.dto';

export class UpdateComboItemDto extends PartialType(CreateComboItemDto) {}
