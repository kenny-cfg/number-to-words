const expandString = require('./expandString');

describe.only('expandString', () => {
  it('works for a3b2c1', () => {
    const expected = 'aaabbc';

    const actual = expandString('a3b2c1');
    
    expect(actual).toBe(expected);
  })
  
  it.only('works for a5', () => {
    const expected = 'aaaaa'
    
    const actual = expandString('a5');
    
    expect(actual).toBe(expected);
  })
})