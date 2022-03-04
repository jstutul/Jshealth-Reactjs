import React, { useState } from "react";
import useFirebase from "../../../hooks/useFirebase";

const Signup = () => {
  const {
    signInUsingGoogle,
    setEmail,
    SignUpWithEmail,
    password,
    setPassword,
    setName,
    success,
  } = useFirebase();
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const matchPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleregistration = (e) => {
    console.log("old=", password, "new=", confirmPassword);
    e.preventDefault();
    if (password !== "" && confirmPassword !== "") {
      if (password === confirmPassword) {
        SignUpWithEmail();
      } else {
        alert("password not matching");
      }
    }
  };
  return (
    <div style={{ marginTop: "7%" }}>
      <section>
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
              <form onSubmit={handleregistration}>
                <h3 className="border-bottom py-2">Signup Page</h3>
                <div className="mb-4">
                  <label className="form-label">Name</label>
                  <input
                    onBlur={handleNameChange}
                    type="text"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className=" mb-4">
                  <label className="form-label">Email</label>
                  <input
                    onBlur={handleEmailChange}
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                  />
                </div>

                <div className=" mb-4">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    onBlur={handlePasswordChange}
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    onBlur={matchPasswordChange}
                    id="confirm-password"
                    className="form-control form-control-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign up
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
                onClick={signInUsingGoogle}
              >
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
