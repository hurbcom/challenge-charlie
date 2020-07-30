const lowerThreshold = 15
const upperThreshold = 35

export default function mapTemperatureToClassNames(temperature) {
  if (!temperature) {
    return ['unset-light', 'unset', 'unset-dark']
  }

  if (temperature < lowerThreshold) {
    return ['cold-light', 'cold', 'cold-dark']
  }

  if (temperature >= lowerThreshold && temperature <= upperThreshold) {
    return ['normal-light', 'normal', 'normal-dark']
  }

  return ['hot-light', 'hot', 'hot-dark']
}
