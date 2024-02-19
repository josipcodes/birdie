import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { SetCurrentUserContext } from "../../App";
import { useHistory } from "react-router-dom";

const LogInForm = () => {
  const setCurrentUser = useContext(SetCurrentUserContext);

  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = logInData;

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    // updates logInData when user fills the forms
    setLogInData({
      ...logInData,
      [e.target.name]: e.target.value,
    });
    // clg
    console.log(logInData)
  };

    // from router
    const history = useHistory();


    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post("/dj-rest-auth/login/", logInData);
        // clg
        console.log("token", data.token)
        setCurrentUser(data.user);
        // clg
        console.log(setCurrentUser)
        // test
        history.push("/");
      } catch (err) {
        setErrors(err.response?.data);
        // clg
        console.log(errors)
      }
    };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Username"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {errors.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.password?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
        <Button variant="primary" type="submit">
          Log In
        </Button>
        {errors.non_field_errors?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
      </Form>
    </div>
  );
};

export default LogInForm;
