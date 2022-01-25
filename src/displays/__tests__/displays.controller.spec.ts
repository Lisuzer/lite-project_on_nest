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
    let display: Display;

    beforeEach(async () => {
      display = await controller.create(dto);
    });

    it('display service should be called', () => {
      expect(service.create).toHaveBeenCalledWith(dto);
    });

    it('should create display', () => {
      expect(display).toEqual(displayStub());
    });
  });

  describe('update', () => {
    const dto = {
      price: 2700,
      model: 'LRG234',
    };
    let display: Display;
    const id: string = '61e95c042794154603009f6f';

    beforeEach(async () => {
      display = await controller.update(id, dto);
    });

    it('display service should be called', () => {
      expect(service.update).toHaveBeenCalledWith(id, dto);
    });

    it('should find and update display by given id', () => {
      expect(display).toEqual(displayStub());
    });
  });

  describe('remove', () => {
    let display: Display;
    const id: string = '61e95c042794154603009f6f';
    beforeEach(async () => {
      display = await controller.remove(id);
    });

    it('display service should be called', () => {
      expect(service.remove).toHaveBeenCalledWith(id);
    });

    it('should find and remove display by given id', () => {
      expect(display).toEqual(displayStub());
    });
  });

  describe('get', () => {
    
    describe('getAll', () => {
      let display: Display[];
      beforeEach(async () => {
        display = await controller.getAll();
      });

      it('display service should be called', () => {
        expect(service.getAll).toHaveBeenCalledWith();
      });

      it('should return displays', () => {
        expect(display).toEqual(displayStub());
      });
    });

    describe('getOne', () => {
      let display: Display;
      const id: string = '61e95c042794154603009f6f';
      beforeEach(async () => {
        display = await controller.getOne(id);
      });

      it('display service should be called', () => {
        expect(service.getOne).toHaveBeenCalledWith(id);
      });

      it('should find and return display by given id', () => {
        expect(display).toEqual(displayStub());
      });
    });
  });
});
