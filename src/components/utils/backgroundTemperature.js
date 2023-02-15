import { DefaultTheme, SummerTheme, WinterTheme, WarmTheme } from '../components/styles/themes'

function backgroundTemperature(temperature) {
  if (temperature === 0) return DefaultTheme;
  if (temperature >= 35) return SummerTheme;
  if (temperature <= 15) return WinterTheme;
  if (temperature > 15 && temperature < 35) return WarmTheme;
  return DefaultTheme;
}

export default backgroundTemperature;
