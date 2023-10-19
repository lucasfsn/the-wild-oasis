import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles.js';
import Button from './ui/Button.jsx';
import Heading from './ui/Heading.jsx';
import Input from './ui/Input.jsx';
import Row from './ui/Row.jsx';

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />

      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Hello World!</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button onClick={() => console.log('Test')}>Check in</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => console.log('Test')}
              >
                Check out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
