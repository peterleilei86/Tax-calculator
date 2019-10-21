import {calByTier, formatter} from '../index'

describe('calculate by tier', () => {
  it('should return tier 1 tax bracket', () => {
    expect(calByTier(1, 1)).toEqual({
      base: '0',
      cap: '0',
      rate: '15.0%',
      gross: 'CA$1.00',
      tax: 'CA$0.15'
    })
  })
  it('should return tier 2 tax bracket', () => {
    expect(calByTier(2, 50000)).toEqual({
      cap: 'CA$47,630.00',
      base: 'CA$7,145.00',
      rate: '20.5%',
      gross: 'CA$50,000.00',
      tax: 'CA$7,630.85'
    })
  })
  it('should return tier 3 tax bracket', () => {
    expect(calByTier(3, 100000)).toEqual({
      base: 'CA$16,908.00',
      cap: 'CA$95,259.00',
      rate: '26.0%',
      gross: 'CA$100,000.00',
      tax: 'CA$18,140.66'
    })
  })
  it('should return tier 4 tax bracket', () => {
    expect(calByTier(4, 150000)).toEqual({
      base: 'CA$30,535.00',
      cap: 'CA$147,667.00',
      rate: '29.0%',
      gross: 'CA$150,000.00',
      tax: 'CA$31,211.57'
    })
  })

  it('should return tier 5 tax bracket', () => {
    expect(calByTier(5, 220000)).toEqual({
      base: 'CA$48,719.00',
      cap: 'CA$210,371.00',
      rate: '33.0%',
      gross: 'CA$220,000.00',
      tax: 'CA$51,896.57'
    })
  })
})

describe('formatter', () => {
  it('should not format the number if it is 0 and the key is not rate', () => {
    expect(formatter('any key', 0)).toBe('0')
  })

  it('should format the rate to percentage', () => {
    expect(formatter('rate', 0.34)).toBe('34.0%')
  })

  it('should format the number to canadian dollars with 2 decimals', () => {
    expect(formatter('fake key', 1111)).toBe('CA$1,111.00')
  })
})
