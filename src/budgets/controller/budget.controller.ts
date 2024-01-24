import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BudgetService } from '../service/budget.service';
import { CreateBudgetDto } from '../dto/create-budget.dto';
import { UpdateBudgetDto } from '../dto/update-budget.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Budget } from '../entities/budget.entity';

@ApiTags('budgets')
@Controller('budgets')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new budget' })
  @ApiResponse({ status: 201, description: 'The budget has been successfully created.', type: Budget })
  create(@Body() createBudgetDto: CreateBudgetDto) {
    return this.budgetService.create(createBudgetDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all budgets' })
  @ApiResponse({ status: 200, description: 'Retrieve a list of budgets.', type: [Budget] })
  findAll() {
    return this.budgetService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a budget by id' })
  @ApiResponse({ status: 200, description: 'Retrieve a budget by its id.', type: Budget })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.budgetService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a budget' })
  @ApiResponse({ status: 200, description: 'The budget has been successfully updated.', type: Budget })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateBudgetDto: UpdateBudgetDto) {
    return this.budgetService.update(id, updateBudgetDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a budget' })
  @ApiResponse({ status: 200, description: 'The budget has been successfully deleted.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.budgetService.remove(id);
  }
}