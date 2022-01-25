import { Test, TestingModule } from '@nestjs/testing';
import { DisplaysController } from './displays.controller';
import { DisplaysService } from './displays.service';
import { MatrixType } from './schemas/matrix-type.enum';
import { ParseObjectIdPipe } from 'src/common/objectid.pipe';

describe('DisplaysController', () => {
  let controller: DisplaysController;
  let service: DisplaysService;

  const mockDisplayService = {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisplaysController],
      providers: [DisplaysService],
    })
      .overrideProvider(DisplaysService)
      .useValue([mockDisplayService, ParseObjectIdPipe])
      .compile();

    controller = await module.resolve(DisplaysController);
    service = module.get<DisplaysService>(DisplaysService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create display', () => {
    const dto = {
      mark: 'samsung',
      price: 2700,
      matrixType: MatrixType.TN,
      model: 'LRG234',
    };
    expect(controller.create(dto)).toEqual({
      id: expect.any(Number),
      mark: 'samsung',
      price: 2700,
      matrixType: MatrixType.TN,
      model: 'LRG234',
    });
    expect(mockDisplayService.create).toHaveBeenCalledWith(dto);
  });
});
