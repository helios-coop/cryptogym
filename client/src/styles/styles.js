import styled, { keyframes } from 'styled-components';
import { shake } from 'react-animations';

const shakeAnimation = keyframes`${shake}`;

export const BouncyDiv = styled.div`
  animation: 1s ${shakeAnimation};
`;

export const TNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  max-height: 100px;
`;

export const Logo = styled.img`
  height: 100px;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  min-width: 200px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const ExerciseNav = styled.div`
  display: flex;
  background-color: blue;
  height: 100vh;
`;

export const BNav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  background: #29323c
  position: fixed;
  bottom: 0;
  padding: 2px 0;
  z-index: 9999;
`;

export const ExerciseContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 167px);
  min-width: 1200px;
`;

export const ContentContainer = styled.div`
  height: calc(100% + 92px);
  font-size: 1.2em;
  text-align: left;
  background: #fffff0;
  color: black;
  min-width: 400px;
  width: 34.2vw;
  padding: 30px 40px;
`;

export const EditorContainer = styled.div`
  height: 100%;
  min-width: 400px;
  width: 31.8vw;
`;

export const ConsoleContainer = styled.div`
  height: calc(100% + 92px);
  min-width: 400px;
  width: 34vw;
  background: black;
`;

export const CourseHomeContainer = styled.div`
  margin: auto;
  padding: 10px;
  color: white;
`;

export const JSLogo = styled.div`
  margin: 0 5% 0 25%;
`;

export const PythonLogo = styled.div`
  margin: 0 25% 0 5%;
`;

export const TeamContainer = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
`;

export const FooterNav = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  background: #29323c;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 12px 0;
`;

export const ConsoleContainer = styled.div`
  height: calc(100% + 92px);
  width: 100%;
  background: black;
`;

export const Weight = styled.div`
  height: calc(100% + 92px);
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: grey;
`;

export const WeightContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const WeightContainer2 = styled.p`
  display: flex;
  justify-content: space-around;
  animation: ${rotate360} 2s linear infinite;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
