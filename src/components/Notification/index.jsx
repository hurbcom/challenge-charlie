import React, { useEffect } from "react";
import * as S from "./styles";
import { createPortal } from "react-dom";
import { RiCloseFill } from "react-icons/ri";
export const Notification = ({ notification, onCloseNotification, timer }) => {
  const onClose = () => {
    onCloseNotification();
  };

  useEffect(() => {
    const timeoutTimer = setTimeout(() => {
      onClose();
    }, timer);
    return () => clearTimeout(timeoutTimer);
  }, []);

  return createPortal(
    <S.Help onClick={() => onClose()}>
      {notification}
      <S.CloseIcon>
        <RiCloseFill size={18} />
      </S.CloseIcon>
    </S.Help>,
    document.getElementById("notification")
  );
};
