import React, { FunctionComponent, useState } from 'react';

import { IAnimated } from './interface';
import { feedbackTouch } from './keyframes';
import { SAnimated } from './styled';

const Animated: FunctionComponent<IAnimated> = ({
  animationDuration = 100,
  Component,
  onClick
}) => {
  const [canStart, setCanStart] = useState(!onClick);

  const handleClick = () => {
    onClick &&
      onClick().then(async () => {
        await setCanStart(true);
        setTimeout(() => setCanStart(false), animationDuration);
      });
  };

  return canStart ? (
    <SAnimated animationDuration={animationDuration} animation={feedbackTouch}>
      <Component />
    </SAnimated>
  ) : (
    <Component onClick={handleClick} />
  );
};

export default Animated;
