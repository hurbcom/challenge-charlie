import React from 'react';
import { string } from 'prop-types';
import {
  Box,
  Text,
} from 'components/atoms';


function Message({ children, mainColor, secoundColor }) {
  return (
    <Box mainColor={mainColor} secoundColor={secoundColor} height={22}>
      <Text type="medium">{ children }</Text>
    </Box>
  );
}

Message.propTypes = {
  children: string.isRequired,
  mainColor: string.isRequired,
  secoundColor: string,
};

Message.defaultProps = {
  secoundColor: null,
};


export default Message;
