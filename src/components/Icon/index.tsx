import {
  Svg01d,
  Svg02d,
  Svg03d,
  Svg04d,
  Svg09d,
  Svg10d,
  Svg11d,
  Svg13d,
  Svg50d,
} from './styles'

interface IconProps {
  icon: '01' | '02' | '03' | '04' | '09' | '10' | '11' | '13' | '50' | undefined
}

export function Icon({ icon }: IconProps) {
  const formattedIcon = icon ? icon.replace(/[dn]/g, '') : undefined

  switch (formattedIcon) {
    case '01':
      return <Svg01d />

    case '02':
      return <Svg02d />

    case '03':
      return <Svg03d />

    case '04':
      return <Svg04d />

    case '09':
      return <Svg09d />

    case '10':
      return <Svg10d />

    case '11':
      return <Svg11d />

    case '13':
      return <Svg13d />

    case '50':
      return <Svg50d />

    default:
      return <Svg50d />
  }
}
