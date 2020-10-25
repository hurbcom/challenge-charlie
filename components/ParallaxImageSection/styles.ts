import styled from 'styled-components';
import {motion} from "framer-motion";

export const Section = styled.section`
  width: 100%;
  background-attachment: fixed;
  background-size: cover;
  background-position: 42% -300px;
  background-repeat: no-repeat;
  margin-bottom: 16px;
`;

export const TitleContainer = styled(motion.div)`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 36px;
  margin-bottom: 16px;
  color: #f8f9fa;
  font-size: 2.5rem;
`;
