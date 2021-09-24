import React from 'react';
import {Box, Button, Grid} from "@material-ui/core";
import {useRouter} from "next/router";

//Hooks
import {useWindowSize} from "../../extra/hooks/useWindowsSize";

//Interface
import {errorPageInterface} from "../../extra/interfaces/errorPage";

//Components
import {ImageBackgroundError} from "../../extra/components/pages/error/components/imageBackgroundError";
import {TypographyCustom} from "../../extra/components/common/typography";
import {Container} from "../../extra/components/common/container";

//I18N
import intl from "react-intl-universal";

//Constants
import {initRouter} from "../../extra/constants/router";

export default function ErrorPage (props:errorPageInterface){
    const size = useWindowSize()
    const router = useRouter()

    return(
        <>
            <Container>
                <ImageBackgroundError>
                    <Grid container
                          direction="column"
                          alignItems="center"
                          justifyContent="center"
                          style={{height: size.height}}>
                        <TypographyCustom variant={'h6'}
                                          style={{color:'white'}}
                                          align={'center'}>
                            {props.statusCode ?? '404'}
                        </TypographyCustom>
                        <TypographyCustom variant={'h2'}
                                          style={{color:'white'}}
                                          align={'center'}>
                            {intl.get('message404')}
                        </TypographyCustom>
                        <Box m={10}>
                            <Button fullWidth
                                    hidden
                                    variant="contained"
                                    color={'secondary'}
                                    style={{
                                        color: "white",
                                        fontSize: 10,
                                        height: 55,
                                        width:294
                                    }}
                                    onClick={()=>router.push(initRouter)}>
                                {intl.get('back')}
                            </Button>
                        </Box>
                    </Grid>
                </ImageBackgroundError>
            </Container>
        </>
    )
}