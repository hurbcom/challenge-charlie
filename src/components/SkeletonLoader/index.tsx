import * as S from './styles'

interface Props {
  height: string
  width: string
}

const SkeletonLoader = ({ height, width }: Props) => (
  <S.SkeletonWrapper height={height} width={width} />
)

export default SkeletonLoader
