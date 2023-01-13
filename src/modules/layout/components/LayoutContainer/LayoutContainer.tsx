import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'
import useGetBing from '../../../../services/bing/queries/useGetBing'

type LayoutContainerProps = {}

const LayoutContainerRoot = styled('div', {
  shouldForwardProp: prop => prop !== 'backgroundImage'
})<{ backgroundImage: string }>(({ backgroundImage }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#808080',
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}))

export default function LayoutContainer(props: PropsWithChildren<LayoutContainerProps>) {
  const { children } = props
  const { data: bingData } = useGetBing()

  return (
    <LayoutContainerRoot backgroundImage={bingData?.backgroundImage || ''}>
      {children}
    </LayoutContainerRoot>
  )
}
