import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route } from "react-router-dom";
import LogInForm from "./pages/auth/LogInForm";
import "./api/axiosDefaults";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("/dj-rest-auth/user/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />
          <Container>
            <Route exact path="/" render={() => <h3>Home</h3>} />
            <Route exact path="/register" render={() => <h3>Register</h3>} />
            <Route exact path="/login" render={() => <LogInForm />} />
            <Route exact path="/feed" render={() => <h3>Feed</h3>} />
            <Route exact path="/saved" render={() => <h3>Saved</h3>} />
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
