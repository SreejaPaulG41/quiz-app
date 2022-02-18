import { AppContainer } from "./Components/Styles/AppContainer.styled";
import Dashboard from "./routes/Dashboard/Dashboard";
import { Routes, Route } from 'react-router-dom';
import QuestionDisplayContainer from "./routes/Genre/QuestionDisplayContainer";
import Result from "./routes/Result/Result";

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/genre/:genreId/:qIndex" element={<QuestionDisplayContainer/>}/>
        <Route path="/result" element={<Result/>}/>
      </Routes>
    </AppContainer>
  );
}

export default App;
