import { Test, TestingModule } from '@nestjs/testing';
import { ComboItemController } from './comboitem.controller';

describe('ComboItemController', () => {
  let controller: ComboItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComboItemController],
    }).compile();

    controller = module.get<ComboItemController>(ComboItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
