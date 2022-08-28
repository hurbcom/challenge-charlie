import { useBackground } from "../../providers/background";

type Props = {
    children:
      | JSX.Element
      | JSX.Element[]
  };

const Background = ({ children }: Props) => {
    const { background } = useBackground();

    return (
        <div className="app" style={{ backgroundImage: `url(${background})` }}>
            <div className="opacity">
                {children}
            </div>
        </div>
    );
};

export default Background;
