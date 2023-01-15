import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

type LayoutHeaderProps = {}

const LayoutHeaderRoot = styled('div')({})

export default function LayoutHeader(props: PropsWithChildren<LayoutHeaderProps>) {
  const { children } = props
  return <LayoutHeaderRoot>{children}</LayoutHeaderRoot>
}
