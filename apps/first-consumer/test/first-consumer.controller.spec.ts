import { Test, TestingModule } from '@nestjs/testing';
import { FirstConsumerController } from '../src/controller/first-consumer.controller';
import { FirstConsumerService } from '../src/services/first-consumer.service';

describe('FirstConsumerController', () => {
  let FirstConsumerController: FirstConsumerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FirstConsumerController],
      providers: [FirstConsumerService],
    }).compile();

    FirstConsumerController = app.get<FirstConsumerController>(FirstConsumerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(FirstConsumerController.getHello()).toBe('Hello World!');
    });
  });
});
