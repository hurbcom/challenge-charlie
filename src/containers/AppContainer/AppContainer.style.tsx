import styled from 'styled-components'

export const AppContainerWallpaper = styled.div`
  background: url('https://www.bing.com/th?id=OHR.MossyCanyon_ROW7441967824_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp')
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`

export const AppContainerMask = styled.main`
  ::before {
    height: 100%;
    width: 100%;
    content: '';
    position: absolute;
    background: rgb(0, 0, 0, 0.45);
  }
`

export const AppContainerWrapper = styled.div`
  max-width: 1224px;
  height: 100vh;
  background: #909090b3;
  color: #fff;
  display: flex;
  flex-flow: column;
  align-items: stretch;
  margin: 0 auto;
  position: relative;
`
