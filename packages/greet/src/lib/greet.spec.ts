/* eslint-disable @typescript-eslint/no-empty-function */
import { greet } from './greet';

describe('greet', () => {
  it('should work', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    greet('hola');
    expect(logSpy).toHaveBeenCalled();
    logSpy.mockReset();
  });
});
