import React from "react";
import {
  apiLogin,
  apiCreateAccount,
  apiAllData,
} from "./dal";

const UserContext = React.createContext();

const UserProvider = ( {children} ) => {
  const [user, setUser] = React.useState({});
  const [isLoggedin, setIsLoggedin] = React.useState(false);
  const [userArray, setUserArray] = React.useState([]);

  const createAccount = (name, email, password) => {
    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    apiCreateAccount(newUser);
    setUser(newUser);
    pushUser(newUser);
  };

  const validateLogin = ({ email, password }) => {
    return apiLogin({ email, password })
      .then(async (result) => {
        const user = await result.json();
        if (user.success !== false) {
          setUser(user);
          setIsLoggedin(true);
          console.log("isLoggedin in context", isLoggedin)
          return true
        }
          return false
      })
      .catch(() => setIsLoggedin(false));
  };
  const pushUser = (user) => {
    userArray.push(user);
    setUserArray(userArray);
  };
    const getAllData = () => {
      return apiAllData()
      .then(async result => {
        const user = await result.json();
        setUserArray(user)
      })
      .catch(err => console.error(err))
    };
  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedin,
        setIsLoggedin,
        validateLogin,
        createAccount,
        getAllData,
        userArray,
      }}
    >
    {children}
    </UserContext.Provider>
  );
};

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "18rem" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h4 className="card-title">{props.title}</h4>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id='createStatus'>{props.status}</div>}
      </div>
    </div>
  );
}

export { Card, UserContext, UserProvider };
