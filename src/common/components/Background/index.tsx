import { useRecoilValue } from "recoil";
import { backgroundImage } from "../../../store/atoms";
import { Wrapper } from "./style";

interface BackgroundProps {
  children: React.ReactNode;
}

export const Background = ({ children }: BackgroundProps) => {
  const backgroundImageUrl = useRecoilValue(backgroundImage);
  return <Wrapper bgUrl={backgroundImageUrl}>{children}</Wrapper>;
};
