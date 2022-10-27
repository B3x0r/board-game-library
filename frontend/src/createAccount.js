import React from "react";
import { UserContext, Card } from "./context";

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { createAccount } = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (label=="password" && field.length < 8) {
      setStatus("Error: Password must be at least 8 characters");
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (label=="email" && !field.match(/.+@.+\..+/g)) {
      setStatus("Error: Email is not valid");
      setTimeout(() => setStatus(""), 3000);
    } else {
      return true;
    }
  }

  function handleCreate() {
    if (!validate(name, "name")) return false;
    if (!validate(email, "email")) return false;
    if (!validate(password, "password")) return false;
    createAccount(name, email, password);
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            <form>
            <br />
              Name
              <br />
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <br />
              Email address
              <br />
              <input
                type="email"
                id="email"
                pattern=".+@.+\..+"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <br />
              Password
              <br />
              <input
                id="password"
                className="password"
                type="password"
                placeholder="Enter password"
                autoComplete="on"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </form>
              <br />
              <button
                type="submit"
                className="btn btn-light"
                disabled={!name.length && !email.length && !password.length}
                onClick={handleCreate}
              >
                Create Account
              </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit"
              className="btn btn-light"
              onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
}

export default CreateAccount;
