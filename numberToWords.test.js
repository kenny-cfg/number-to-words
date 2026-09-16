const numberToWords = require('./numberToWords');

describe('numberToWords', () => {
  it('works for 5', () => {
    const expected = 'five';

    const actual = numberToWords(5);
    
    expect(actual).toBe(expected);
  });

  it('works for 16', () => {
    const expected = 'sixteen';

    const actual = numberToWords(16);
    
    expect(actual).toBe(expected);
  })
  
  it('works for 24', () => {
    const expected = 'twenty four';
    
    const actual = numberToWords(24);
    
    expect(actual).toBe(expected);
  })
})