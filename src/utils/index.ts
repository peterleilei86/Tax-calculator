const taxBrackets: any = {
  '1': {
    cap: 0,
    base: 0,
    rate: 0.15
  },
  '2': {
    cap: 47630,
    base: 7145,
    rate: 0.205
  },
  '3': {
    cap: 95259,
    base: 16908,
    rate: 0.26
  },
  '4': {
    cap: 147667,
    base: 30535,
    rate: 0.29
  },
  '5': {
    cap: 210371,
    base: 48719,
    rate: 0.33
  }
}

const TIER_2 = 47630
const TIER_3 = 95259
const TIER_4 = 147667
const TIER_5 = 210371

type Result = {
  tax: number
  base: number
  cap: number
  rate: number
  gross: number
}

/**
 * Calculate tax based on tier and total taxable income
 * @param tier tax bracket tier in taxBrackets object
 * @param gross total taxable income
 */
export function calByTier(tier: number, gross: number): Result {
  const {cap, base, rate} = taxBrackets[tier]
  const tax = base + (gross - cap) * rate
  const result = {tax, base, cap, rate, gross}
  // apply formatter to every key value pair in the result object
  return Object.entries(result)
    .map(([key, value]) => [key, formatter(key, value)])
    .reduce(
      (acc, [k, v]) => {
        return {...acc, [k]: v}
      },
      {} as Result
    )
}

export const calculate = (num: number): Result => {
  if (num > TIER_5) {
    return calByTier(5, num)
  }
  if (num > TIER_4) {
    return calByTier(4, num)
  }
  if (num > TIER_3) {
    return calByTier(3, num)
  }
  if (num > TIER_2) {
    return calByTier(2, num)
  }
  return calByTier(1, num)
}

/**
 * Format monetary numbers into Canadian dollars
 * and rate into percentage
 * @param key keys in the taxBrackets object
 * @param num number to be formatted
 */
export const formatter = (key: string, num: number): string => {
  if (key === 'rate') {
    return num.toLocaleString('en-CA', {
      style: 'percent',
      minimumFractionDigits: 1
    })
  }

  if (num) {
    return num.toLocaleString('en-CA', {
      style: 'currency',
      currency: 'CAD'
    })
  }

  return String(num)
}
