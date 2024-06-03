import React, { PropsWithChildren } from 'react'

function MainContainer(props: PropsWithChildren & { background: string }) {
  return (
    <div
      data-testid="main-container"
      className="relative flex flex-col min-w-[390px] min-h-screen items-center justify-start"
      style={{ backgroundImage: `url(https://bing.com/${props.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {props.children}
      </div>
    </div>
  )
}

export default MainContainer

