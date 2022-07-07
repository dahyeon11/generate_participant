import { Test, TestingModule } from '@nestjs/testing';
import { XlsxController } from './xlsx.controller';
import { XlsxService } from './xlsx.service';

describe('XlsxController', () => {
  let controller: XlsxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [XlsxController],
      providers: [XlsxService],
    }).compile();

    controller = module.get<XlsxController>(XlsxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
