import styled from 'styled-components';

export const TNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  max-height: 100px;
`;

export const Logo = styled.img`
  height: 100px;
`;

export const HomeContainer = styled.div`
  min-width: 200px;
  max-width: 1200px;
  margin: 0 10% 0 10%;
  height: 100vh;
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
  height: calc(100vh - 237px);
`;

export const ContentContainer = styled.div`
  height: calc(100% + 92px);
  font-size: 1.2em;
  text-align: left;
  background: white;
  color: black;
  width: calc(100% + 92px);
  min-width: 320px;
  max-width: 800px;
  padding: 30px 40px;
  overflow: auto;
`;

export const EditorContainer = styled.div`
  height: 100%;
  width: 100%;
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

export const FooterContainer = styled.div`
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
`;
``;
