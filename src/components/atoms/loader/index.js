// Import Style
import { 
    LoaderBox, LoaderIcon
} from './styled';

const Loader = ( props ) => (
    <LoaderBox {...props}>
        <LoaderIcon>
            <div></div><div></div>
        </LoaderIcon>
    </LoaderBox>
);

export default Loader;