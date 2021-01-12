import { useState } from "react";

const runControlValidation = (name, value, setValue, setError) => {
  if (name === "email") {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    const verification = pattern.test(value);

    if (verification) {
      setValue(value);
      setError(undefined);
    } else {
      setError("Enter a valid email");
    }
  }

  if (name === "password") {
    const patternNumber = /\d{1}/g;
    const verificationNumber = patternNumber.test(value);

    if (!verificationNumber) {
      setError("Password contains at least one number");
    }

    const patternCapitalLetter = /[A-Z]{1}/g;
    const verificationCapitalLetter = patternCapitalLetter.test(value);

    if (!verificationCapitalLetter) {
      setError("Password contains at least one capital letter");
    }

    const patternSymbolsLength = /^([a-zA-Z0-9]{6,20})$/g;
    const verificationSimbolsLength = patternSymbolsLength.test(value);

    if (!verificationSimbolsLength) {
      setError("Password is at least 6 characters without special symbols");
    }

    if (
      verificationCapitalLetter &&
      verificationNumber &&
      verificationSimbolsLength
    ) {
      setValue(value);
      setError(undefined);
    }
  }
};

const getControlChangeHandler = (setValue, setError) => {
  let id;
  return (e) => {
    if (id) {
      clearTimeout(id);
      id = null;
    }
    const newValue = e.target.value;
    const name = e.target.name;
    id = setTimeout(() => {
      runControlValidation(name, newValue, setValue, setError);
      id = null;
    }, 400);
  };
};

const useFormControl = () => {
  const [value, setValue] = useState();
  const [error, setError] = useState();

  const changeHandler = getControlChangeHandler(setValue, setError);

  const api = {
    value,
    setValue,
    error,
    setError,
    changeHandler,
  };

  return api;
};

export default useFormControl;
