import { AnotherMiddleware } from './another.middleware';

describe('AnotherMiddleware', () => {
  it('should be defined', () => {
    expect(new AnotherMiddleware()).toBeDefined();
  });
});
