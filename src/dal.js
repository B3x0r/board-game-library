const apiLogin = ({email, password}) => {
  return fetch(`/account/login/${email}/${password}`);
};
const apiCreateAccount = ({name, email, password}) => {
  return fetch(`/account/create/${name}/${email}/${password}`);
};
const apiLibrary = ({email, [library]}) => {
  return fetch(`/account/library/${email}/${[library]}`);
};

export {
  apiLogin,
  apiCreateAccount,
  apiLibrary,
};
