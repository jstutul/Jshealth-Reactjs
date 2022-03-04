import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";

const Login = () => {
  const {
    signInUsingGoogle,
    success,
    loginWithEmail,
    error,
    setPassword,
    setEmail,
    setUser,
    setError,
  } = useFirebase();

  const location = useLocation();
  const history = useNavigate();
  console.log("came from", location.state?.form);
  const redirect_uri = location.state?.form.pathname || "/";
  console.log(redirect_uri);
  const handleEmailLogin = (e) => {
    e.preventDefault();
    console.log("login progres");
    loginWithEmail();
    history(redirect_uri);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlesignInUsingGoogle = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        history(redirect_uri);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <>
      <section style={{ marginTop: "7%" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phoneimage"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h1 className="border-bottom py-2">Login Page</h1>
              {success ? (
                <div
                  className="alert alert-success"
                  role="alert"
                  data-mdb-color="success"
                >
                  {success}
                </div>
              ) : (
                <div></div>
              )}
              {error ? (
                <div
                  className="alert alert-success"
                  role="alert"
                  data-mdb-color="success"
                >
                  {error}
                </div>
              ) : (
                <div></div>
              )}
              <form onSubmit={handleEmailLogin}>
                <div className="mb-4">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    onBlur={handleEmailChange}
                    className="form-control form-control-lg"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onBlur={handlePasswordChange}
                    className="form-control form-control-lg"
                    required
                  />
                </div>

                <div className="mb-4">
                  <Link className="text-warning" to="/signup">
                    Register Now
                  </Link>
                  <br />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  style={{
                    backgroundColor: "rgb(10, 66, 117)",
                    color: "white",
                  }}
                >
                  Sign in
                </button>
              </form>
              <p className="text-center">----------OR-------------</p>
              <button
                type="submit"
                className="btn btn-lg btn-block"
                style={{
                  backgroundColor: "rgb(10, 66, 117)",
                  color: "white",
                }}
                onClick={handlesignInUsingGoogle}
              >
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
