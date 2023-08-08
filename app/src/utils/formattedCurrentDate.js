export const formattedCurrentDate = () => {
  const currentDate = new Date()
  const fullYear = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, '0')
  const dayOfMonth = String(currentDate.getDate()).padStart(2, '0')

  return `${fullYear}${month}${dayOfMonth}`
}
export default formattedCurrentDate
