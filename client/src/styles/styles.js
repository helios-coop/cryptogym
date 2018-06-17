import styled from 'styled-components';

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
  min-width: 200px;
  max-width: 1000px;
  margin: 0 10% 0 10%;
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
  min-width: 1300px;
`;

export const ContentContainer = styled.div`
  height: calc(100% + 92px);
  font-size: 1.2em;
  text-align: left;
  background: #fffff0;
  color: black;
  width: calc(100% + 92px);
  min-width: 400px;
  max-width: 850px;
  padding: 30px 40px;
  overflow: auto;
`;

export const EditorContainer = styled.div`
  height: 100%;
  width: 100%;
  min-width: 400px;
  max-width: 700px;
`;

export const CourseHomeContainer = styled.div`
  margin: auto;
  max-width: 500px;
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
  background: black;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  padding: 10px 0;
`;

export const ConsoleContainer = styled.div`
  height: calc(100% + 92px);
  width: 100%;
  background: black;
`;
