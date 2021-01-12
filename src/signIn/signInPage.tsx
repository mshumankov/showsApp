import React, { Fragment, useState, useRef } from "react";
import Navigation from "../navigation/navPage";
import fire from "../auth/fire";
import useFormControl from "../customHook/formControl";

const SignIn = ({ history }): JSX.Element => {
  const emailFormControl = useFormControl();
  const passwordFormControl = useFormControl();
  const [errorRes, showErrorRes] = useState("");
  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const emailSignIn = useRef(null);
  const emailSignUp = useRef(null);
  const passwordSignIn = useRef(null);
  const passwordSignUp = useRef(null);

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

  const activeSignIn = (): void => {
    setSignIn(true);
    setSignUp(false);
    emailSignUp.current.value = null;
    passwordSignUp.current.value = null;
  };

  const activeSignUp = (): void => {
    setSignUp(true);
    setSignIn(false);
    emailSignIn.current.value = null;
    passwordSignIn.current.value = null;
  };
  return (
    <Fragment>
      <Navigation />
      <main className="main">
        <section className="content signIn-page">
          <div className="border-wrap">
            <div className="singIn-container">
              <div className="btn-manu-wrap">
                <button
                  className={signIn ? "btn-menu active" : "btn-menu"}
                  onClick={activeSignIn}
                >
                  Sign in
                </button>
                <button
                  className={signUp ? "btn-menu active" : "btn-menu"}
                  onClick={activeSignUp}
                >
                  Sign up
                </button>
              </div>
              <article>
                <form className={signIn ? "form active" : "form"}>
                  <h2>Sign in to Gump</h2>
                  <div className="form-control">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      ref={emailSignIn}
                      onChange={emailFormControl.changeHandler}
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      ref={passwordSignIn}
                      onChange={passwordFormControl.changeHandler}
                    />
                  </div>
                  <div className="error-message">{viewError()}</div>
                  <div className="button-wrap">
                    <button
                      className="btn-form"
                      type="button"
                      onClick={submitHandlerSignIn}
                    >
                      <span>Sign In</span>
                    </button>
                  </div>
                  <div className="error-message-res">{errorRes}</div>
                </form>
              </article>
              <article>
                <form className={signUp ? "form active" : "form"}>
                  <h2>Create your account</h2>
                  <div className="form-control">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      ref={emailSignUp}
                      onChange={emailFormControl.changeHandler}
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      ref={passwordSignUp}
                      onChange={passwordFormControl.changeHandler}
                    />
                  </div>
                  <div className="error-message">{viewError()}</div>
                  <div className="button-wrap">
                    <button
                      className="btn-form"
                      type="button"
                      onClick={submitHandlerSignUp}
                    >
                      <span>Sign Up</span>
                    </button>
                  </div>
                </form>
              </article>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default SignIn;
