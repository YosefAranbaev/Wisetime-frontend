import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useHistory } from "react-router-dom";

import AuthService from "../../services/auth.service";

// import swal from 'sweetalert2';
// window.Swal = swal;

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const styles = {
    card: {
      backgroundColor: '#fff',
      boxShadow:' 2px 2px 2px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      border: 'none'
    }
  }

  const form = useRef();
  const checkBtn = useRef();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, password).then(
        () => {
          history.push("/schedule");
          window.location.reload();
          // swal.fire({
          //   title: 'Welcome to WiseTime!',
          //   text: 'Manage your preferences for better experience',
          //   width: 600,
          //   padding: '3em',
          //   color: '#000',
          //   backdrop: `
          //               rgba(0,0,123,0.4)
          //               url("https://i.gifer.com/origin/a4/a41b711baaf00ec407578bd7fbb6087c.gif")
          //               left top
          //               no-repeat
          //             `
          // })
        },
        (error) => {
          setLoading(false);
          setMessage('Invalid email or password');
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container" style={styles.card}>
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={onChangeEmail}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Login;
