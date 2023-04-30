import React from "react";
import Text from "@components/Text";
import TextButton from "@components/TextButton";
import Spacer from "@components/Spacer";
import ForecastWrapper from "@components/ForecastWrapper";
import { baseFontSize } from "@styles/mixins";

function ForecastError({ onClick }: { onClick: () => void }) {
    return (
        <ForecastWrapper>
            <Text size={baseFontSize}>
                Não foi possível carregar as informações de clima.
            </Text>
            <Spacer width="100%" padding="1rem 0">
                <TextButton onClick={onClick}>
                    Clique aqui pra tentar novamente
                </TextButton>
            </Spacer>
        </ForecastWrapper>
    );
}

export default ForecastError;
