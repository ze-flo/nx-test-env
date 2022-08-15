/* eslint-disable @typescript-eslint/no-empty-function */
import { ciao } from './ciao';

describe('ciao', () => {
  it('should work', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    ciao('bye');
    expect(logSpy).toHaveBeenCalled();
    logSpy.mockReset();
  });
});
