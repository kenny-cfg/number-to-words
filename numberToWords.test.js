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
  
  it('works for 32', () => {
    const expected = 'thirty two';
    
    const actual = numberToWords(32);
    
    expect(actual).toBe(expected);
  })
  
  it('works for 30', () => {
    const expected = 'thirty';
    
    const actual = numberToWords(30);
    
    expect(actual).toBe(expected);
  })
  
  it('works for 57', () => {
    const expected = 'fifty seven';
    
    const actual = numberToWords(57);
    
    expect(actual).toBe(expected);
  })
  
  it('works for 98', () => {
    const expected = 'ninety eight';
    
    const actual = numberToWords(98);
    
    expect(actual).toBe(expected);
  })
})