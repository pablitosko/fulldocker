import { Test, TestingModule } from '@nestjs/testing';
import { MainReceiverController } from '../src/main-receiver.controller';
import { MainReceiverService } from '../src/main-receiver.service';

describe('MainReceiverController', () => {
  let MainReceiverController: MainReceiverController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MainReceiverController],
      providers: [MainReceiverService],
    }).compile();

    MainReceiverController = app.get<MainReceiverController>(MainReceiverController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(MainReceiverController.getHello()).toBe('Hello World!');
    });
  });
});
