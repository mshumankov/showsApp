import React, { Fragment, useState, useContext } from "react";
import Navigation from "../navigation/navPage";
import fire from "../auth/fire";
import useFormControl from "../customHook/formControl";

const SignIn = ({ history }): JSX.Element => {
  const emailFormControl = useFormControl();
  const passwordFormControl = useFormControl();
  const [errorRes, showErrorRes] = useState("");

  const viewError = () => {
    if (emailFormControl.error) {
      return emailFormControl.error;
    } else if (passwordFormControl.error) {
      return passwordFormControl.error;
    } else {
      return null;
    }
  };

  const submitHandlerSignIn = async () => {
    if (
      !emailFormControl.error &&
      !passwordFormControl.error &&
      emailFormControl.value &&
      passwordFormControl.value
    ) {
      try {
        await fire
          .auth()
          .signInWithEmailAndPassword(
            emailFormControl.value,
            passwordFormControl.value
          );

        history.push("/");
      } catch (error) {
        showErrorRes(error.message);
        console.log(error.message);
      }
    }
  };

  const submitHandlerSignUp = async () => {
    if (
      !emailFormControl.error &&
      !passwordFormControl.error &&
      emailFormControl.value &&
      passwordFormControl.value
    ) {
      try {
        await fire
          .auth()
          .createUserWithEmailAndPassword(
            emailFormControl.value,
            passwordFormControl.value
          );

        history.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Fragment>
      <Navigation />
      <main className="main">
        <section className="content">
          <article>
            <form>
              <h2>Sign in to Gump</h2>
              <div className="form-control">
                <label>E-mail:</label>
                <input
                  type="email"
                  name="email"
                  onChange={emailFormControl.changeHandler}
                />
              </div>
              <div className="form-control">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  onChange={passwordFormControl.changeHandler}
                />
              </div>
              <div className="error-message">{viewError()}</div>
              <div className="button-wrap">
                <div className="form-button">
                  <button
                    className="react-icons-btn-form"
                    type="button"
                    onClick={submitHandlerSignIn}
                  >
                    <span>Sign In</span>
                  </button>
                </div>
              </div>
              <div className="error-message-res">{errorRes}</div>
            </form>
          </article>
          <article>
            <form>
              <h2>Create your account</h2>
              <div className="form-control">
                <label>E-mail:</label>
                <input
                  type="email"
                  name="email"
                  onChange={emailFormControl.changeHandler}
                />
              </div>
              <div className="form-control">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  onChange={passwordFormControl.changeHandler}
                />
              </div>
              <div className="error-message">{viewError()}</div>
              <div className="button-wrap">
                <div className="form-button">
                  <button
                    className="react-icons-btn-form"
                    type="button"
                    onClick={submitHandlerSignUp}
                  >
                    <span>Sign Up</span>
                  </button>
                </div>
              </div>
            </form>
          </article>
        </section>
      </main>
    </Fragment>
  );
};

export default SignIn;
