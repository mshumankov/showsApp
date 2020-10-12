const helpers = {
  toBoolean: (): boolean => {
    const value = localStorage.getItem("darkMode");
    return value === "true" ? true : false;
  },
};

export default helpers;
