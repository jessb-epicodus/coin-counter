import  { recursiveCounter } from '../src/js/coin-calculator';

describe('Coins', () => {

  test('should correctly give count of quarters in 4.99', () => {
    expect(recursiveCounter(4.99)).toEqual(19);
  });
});