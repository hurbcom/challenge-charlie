import colors from '../../../../assets/styles/colors'

export default (temperature: number) => {
  if (!temperature) return [colors.grayLight, colors.grayMid, colors.grayDark]
  if (temperature < 15) return [colors.blueLight, colors.blueMid, colors.blueDark]
  if (temperature > 35) return [colors.redLight, colors.redMid, colors.redDark]
  return [colors.yellowLight, colors.yellowMid, colors.yellowDark]
}
