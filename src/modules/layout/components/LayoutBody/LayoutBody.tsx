import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

type LayoutBodyProps = {}

const LayoutBodyRoot = styled('div')({
  display: 'flex',
  flex: 1
})

export default function LayoutBody(props: PropsWithChildren<LayoutBodyProps>) {
  const { children } = props
  return <LayoutBodyRoot>{children}</LayoutBodyRoot>
}
