import { ExampleMiddleware } from './example.middleware';

describe('ExampleMiddleware', () => {
  it('should be defined', () => {
    expect(new ExampleMiddleware()).toBeDefined();
  });
});
