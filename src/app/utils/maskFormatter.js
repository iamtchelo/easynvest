const defineNewValue = ({ mask, oldValue, key, maxValueLength }) => {
  oldValue = oldValue.replace(/\D/g, '')

  if (key.toUpperCase() === 'BACKSPACE') return oldValue.slice(0, -1)
  if (isNaN(+key)) return oldValue
  if (oldValue.length === maxValueLength) return oldValue

  return `${oldValue}${key}`
}

const applyMask = ({ mask, value, maxValueLength }) => {
  const result = []
  let valueIndex = 0

  if (value.length === 0) return value
  for (let i = 0; i < mask.length; ++i) {
    const maskElement = mask[i]

    if (maskElement === '0') {
      const valueElement = value[valueIndex]

      result.push(valueElement)
      valueIndex++

      if (valueIndex === value.length && value.length !== maxValueLength) break
    } else {
      result.push(maskElement)
    }
  }

  return result.join('')
}

export default ({ mask, oldValue, key }) => {
  const maxValueLength = mask.replace(/\D/g, '').length
  const value = defineNewValue({ mask, oldValue, key, maxValueLength })

  return applyMask({ mask, value, maxValueLength })
}
