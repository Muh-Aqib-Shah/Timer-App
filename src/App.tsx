import { Clock } from './Clock';
import { GlobalStyle, StyledWrapper } from './App.styles';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <StyledWrapper>
      <Clock />
      </StyledWrapper>
    </div>
  );
}

export default App;