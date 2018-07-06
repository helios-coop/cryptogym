import styled from 'styled-components';

// HOMEPAGE STYLES

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
  // position: fixed;
  // left: 0;
  // bottom: 0;
  flex-direction: column;
  background: #29323c;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
`;

// COURSE HOME STYLES

export const CourseHomeContainer = styled.div`
  margin: auto;
  padding: 10px;
  color: white;
`;

export const WeightContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

// EXERCISE STYLES

export const BNav = styled.div`
display: flex;
justify-content: space-evenly;
width: 100vw;
background: #29323c
position: fixed;
bottom: 0;
padding: 2px 10%;
z-index: 5;

@media (max-width: 1200px) {
  justify-content: space-between;
  padding: 2px 10%;
  }
`;


export const ExerciseContainer = styled.div`
display: flex;
justify-content: center;
min-width: 1200px;
`;

export const ContentContainer = styled.div`
// height: calc(100% + 92px);
//height: 100% - 20px;
height: 86vh;
font-size: 1.2em;
text-align: left;
background: #fffff0;
color: black;
min-width: 400px;
width: 34.2vw;
padding: 30px 40px;
overflow: auto;
`;

export const EditorContainer = styled.div`
// height: 100%;
height: 86vh;
min-width: 400px;
width: 31.8vw;
`;

export const ExerciseNav = styled.div`
  display: flex;
  background-color: blue;
`;

export const ConsoleContainer = styled.div`
  height: 86vh;
  min-width: 400px;
  width: 34vw;
  background: black;
`;

export const EditorNav = styled.div`
  display: flex;
  right: 0;
  width: 100vw;
  position: fixed;
  bottom: 2px;
  display: flex;
  justify-content: center;
  z-index: 10;
`;