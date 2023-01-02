import React from "react";
const Hamcontext = React.createContext();
const { Provider } = Hamcontext;

function Context(props) {
  const [ham, setham] = React.useState(false);

  function hamOn() {
    setham((preval) => {
      return !preval;
    });
  }

  return <Provider value={{ ham, hamOn }}>{props.children}</Provider>;
}

export { Context, Hamcontext };
