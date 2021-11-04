import { hello } from '../src/hello';

describe('example test', () => {
  it('test hello', () => {
    expect(hello).toBe('hello');
  });
});
