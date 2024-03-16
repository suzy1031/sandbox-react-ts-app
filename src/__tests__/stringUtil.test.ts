import { splitAndJoin } from '../utils/stringUtil';

describe('splitAndJoin', () => {
  it('should split and join the string correctly', () => {
    const input = 'HelloWorld';
    const expectedOutput = 'hello-world';

    const result = splitAndJoin(input);

    expect(result).toEqual(expectedOutput);
  });
});
