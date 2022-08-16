import { Wrapper } from "./style";
import { useRecoilValue } from "recoil";
import { backgroundImageState } from "../../../store/atoms";

interface BackgroundProps {
  children: React.ReactNode;
}

export const Background = ({ children }: BackgroundProps) => {
  const backgroundImageUrl = useRecoilValue(backgroundImageState);
  return <Wrapper bgUrl={backgroundImageUrl}>{children}</Wrapper>;
};
