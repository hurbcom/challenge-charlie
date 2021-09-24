//Component
import ErrorPage from "./error";
import {NextPageContext} from "next";

//Interfaces
import {errorPageInterface} from "../extra/interfaces/errorPage";

function Error(props:errorPageInterface) {
    return (
        <ErrorPage statusCode={props.statusCode}/>
    )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error