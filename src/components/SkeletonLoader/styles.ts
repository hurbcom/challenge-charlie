import styled, { keyframes } from 'styled-components'

interface Props {
  height: string
  width: string
}

const pulse = keyframes`
  0% {
		opacity: 1
	}

	70% {
		opacity: 0.5;
	}

	100% {
		opacity: 1;
	}
`

export const SkeletonWrapper = styled.span`
  display: inline-block;
  height: ${({ height }: Props) => (height ? height : '2rem')};
  width: ${({ width }: Props) => (width ? width : '5rem')};
  position: relative;
  overflow: hidden;
  background-color: #dddbdd;
  animation: ${pulse} 1.2s infinite;
`
