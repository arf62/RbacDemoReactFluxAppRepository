import React from "react";

function LoginForm(props) {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <label htmlFor="UserName">UserName</label>
          <div className="field">
            <input
              id="userName"
              type="text"
              onChange={props.onChange}
              name="userName"
              className="form-control"
              value={props.login.userName || ""}
            />
          </div>
          {props.errors.userName && (
            <div className="alert alert-danger">{props.errors.userName}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <div className="field">
            <input
              id="password"
              type="text"
              onChange={props.onChange}
              name="password"
              className="form-control"
              value={props.login.password || ""}
            />
          </div>
          {props.errors.password && (
            <div className="alert alert-danger">{props.errors.password}</div>
          )}
        </div>

        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
    </>
  );
}

export default LoginForm;
