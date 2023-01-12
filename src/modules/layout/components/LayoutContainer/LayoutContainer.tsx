import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

type LayoutContainerProps = {}

const LayoutContainerRoot = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh'
})

export default function LayoutContainer(props: PropsWithChildren<LayoutContainerProps>) {
  const { children } = props
  return <LayoutContainerRoot>{children}</LayoutContainerRoot>
}
