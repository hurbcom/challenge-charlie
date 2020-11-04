import styled, { keyframes } from 'styled-components'

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
  height: ${({ height }) => (height ? height : '2rem')};
  width: ${({ width }) => (width ? width : '5rem')};
  position: relative;
  overflow: hidden;
  background-color: #dddbdd;
  animation: ${pulse} 1.2s infinite;
`
