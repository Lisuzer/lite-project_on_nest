import { Test, TestingModule } from '@nestjs/testing';
import { DisplaysController } from '../displays.controller';
import { DisplaysService } from '../displays.service';
import { MatrixType } from '../schemas/matrix-type.enum';
import { ParseObjectIdPipe } from 'src/common/objectid.pipe';
import { displayStub } from './stubs/display.stub';
import { Display } from '../schemas/display.schema';

jest.mock('../displays.service.ts');

describe('DisplaysController', () => {
  let controller: DisplaysController;
  let service: DisplaysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisplaysController],
      providers: [DisplaysService],
    }).compile();

    controller = module.get<DisplaysController>(DisplaysController);
    service = module.get<DisplaysService>(DisplaysService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    const dto = {
      mark: 'samsung',
      price: 2700,
      matrixType: MatrixType.TN,
      model: 'LRG234',
    };

    let display: Display

    beforeEach(async () =>{
      display = await controller.create(dto);
    })

    it('display service should be called', () => {
      expect(service.create).toHaveBeenCalledWith(dto);
    });

    it('should create display', () => {
      expect(display).toEqual(displayStub());
    });
  });
});
