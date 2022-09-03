import { useBackground } from "../../providers/background";
import { useWeather } from "../../providers/weather";

type Props = {
    children:
      | JSX.Element
      | JSX.Element[]
  };

const Background = ({ children }: Props) => {
    const { weather } = useWeather();
    const { background } = useBackground();

    return (
        <div className='app' style={{ backgroundImage: `url(${background})` }}>
            <div className={`opacity ${weather?.today.bgColor ?? ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Background;
