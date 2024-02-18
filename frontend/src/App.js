import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route } from "react-router-dom";
import LogInForm from './pages/auth/LogInForm';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container>
        <h3>Register</h3>
        <Route exact path='/login' render={() => <LogInForm />} />
        <h3>Feed</h3>
        <h3>Saved</h3>
      </Container>
    </div>
  );
}

export default App;