import { Controller, Get } from '@nestjs/common';
import { BothService } from '../service/both.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GenericItemDto } from '../dto/genericItemDto.dto';

@ApiTags('both')
@Controller('both')
export class BothController {
  constructor(private bothService: BothService) {}

  @Get()
  @ApiOperation({ summary: 'Get aggregated data of products, services, and combos' })
  @ApiResponse({ status: 200, type: [GenericItemDto] })
  async findAll(): Promise<GenericItemDto[]> {
    return this.bothService.findAll();
  }
}