import styled from "styled-components";
import { Smartphone } from '@styled-icons/material/Smartphone';
import { LocationOn } from '@styled-icons/material/LocationOn';
import { Email } from '@styled-icons/material-outlined/Email';
import {motion} from "framer-motion";

export const InfoLink = styled(motion.a)``

export const StyledSmartphone = styled(Smartphone)`
  margin-bottom: 16px;
`

export const StyledLocation = styled(LocationOn)`
  margin-bottom: 16px;
`

export const StyledEmail = styled(Email)`
  margin-bottom: 16px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 24px;
`

export const InfoText = styled.p`
    margin: 0;
    color: #a7a7a7;
    font-size: 0.9rem;
`

export const WhiteText = styled.span`
  color: #efefef;
`


