import { Test, TestingModule } from '@nestjs/testing';
import { servicesService } from './services.service';

describe('ProductService', () => {
  let service: servicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [servicesService],
    }).compile();

    service = module.get<servicesService>(servicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
