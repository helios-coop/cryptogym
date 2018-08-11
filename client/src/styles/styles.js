import styled from 'styled-components';

// HOMEPAGE STYLES

export const TNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  max-height: 100px;
  background: #151c24;
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
  max-width: 850px;
  margin: 0 auto;
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
  bottom: 0;
  flex-direction: column;
  // background: #29323c;
  background: #151c24;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;

  @media (max-width: 830px) {
    position: static;
  }
  @media (max-height: 780px) {
    position: static;
  }
`;

// COURSE HOME STYLES

export const CourseHomeContainer = styled.div`
  margin: auto;
  padding: 10px;
  color: white;
`;

export const WeightContainer = styled.div`
  max-width: 1570px;
  display: flex;
  margin: auto;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`;

// EXERCISE STYLES

export const BNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  // background: #29323c
  background: #151c24;
  position: fixed;
  bottom: 0;
  padding: 2px 10%;
  z-index: 5;

  @media (max-width: 1200px) {
    padding: 2px 3%;
  }
`;

export const ExerciseContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 1200px;
`;

export const ContentContainer = styled.div`
  height: calc(100vh - 100px);
  font-size: 1.2em;
  text-align: left;
  background: #093145;
  color: white;
  min-width: 400px;
  width: 34.2vw;
  padding: 30px 40px;
  overflow: auto;
  font-weight: 200;

  h2 {
    color: #efd469;
  }
  p {
    padding-left: 5px;
  }
`;

export const EditorContainer = styled.div`
  height: calc(100vh - 100px);
  min-width: 400px;
  width: 31.8vw;
`;

export const ExerciseNav = styled.div`
  display: flex;
  background-color: blue;
`;

export const ConsoleContainer = styled.div`
  height: calc(100vh - 100px);
  min-width: 400px;
  width: 34vw;
  background: black;
  overflow: auto;
  color: ##c00;
  padding-top: 10px;
`;

export const EditorNav = styled.div`
  width: 200px;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  bottom: 2px;
  display: flex;
  justify-content: space-evenly;
  z-index: 10;

  button {
    margin: 0 50%;
  }

  @media (max-width: 700px) {
    button {
      margin: 0 5%;
    }
  }
`;
