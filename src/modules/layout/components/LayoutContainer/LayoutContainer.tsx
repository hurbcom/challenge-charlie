import styled from '@emotion/styled'
import useGetBing from '../../../../services/bing/queries/useGetBing'
import UserLocation from '../../../location/components/UserLocation'
import LayoutHeader from '../LayoutHeader'

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

const LayoutContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '60%',
  height: '100%',
  minHeight: '100vh'
})

export default function LayoutContainer(props: LayoutContainerProps) {
  const { data: bingData } = useGetBing()

  return (
    <LayoutContainerRoot backgroundImage={bingData?.backgroundImage || ''}>
      <LayoutContent>
        <LayoutHeader>
          <UserLocation />
        </LayoutHeader>
      </LayoutContent>
    </LayoutContainerRoot>
  )
}
