import React from "react";
import Text from "./Text";
import TextButton from "./TextButton";
import Spacer from "./Spacer";
import ForecastWrapper from "./ForecastWrapper";

function ForecastError({ onClick }: { onClick: () => void }) {
    return (
        <ForecastWrapper>
            <Text size="1.25rem">
                Não foi possível carregar as informações de clima.
            </Text>
            <Spacer>
                <TextButton onClick={onClick}>
                    Clique aqui pra tentar novamente
                </TextButton>
            </Spacer>
        </ForecastWrapper>
    );
}

export default ForecastError;
