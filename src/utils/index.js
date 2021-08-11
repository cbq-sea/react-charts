export function summate(data) {
  return data.reduce((a, b) => a + b.value * 1, 0)
}

/**
 * 格式化千分位
 * @param num
 * @returns {string}
 */
export const formatNumber = num => {
  const numeral = Number(num)
  const bool = Number.isInteger(numeral)
  const reg = /\d{1,3}(?=(\d{3})+$)/g

  if (bool) {
    return `${numeral}`.replace(reg, '$&,')
  }

  const temp = `${numeral}`.split('.')

  return `${temp[0].replace(reg, '$&,')}.${temp[1]}`
}

export function omit(obj, fields) {
  const shallowCopy = {
    ...obj,
  }
  for (let i = 0; i < fields.length; i++) {
    const key = fields[i]
    delete shallowCopy[key]
  }
  return shallowCopy
}

export const pick = (obj, keys) => {
  const r = {}
  keys.forEach(key => {
    r[key] = obj[key]
  })
  return r
}

export function isString(v) {
  return typeof v === 'string'
}
