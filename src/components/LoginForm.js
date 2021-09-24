import React, {useState} from 'react';

function LoginForm({ Login, error}) {
    const [details, setDetais] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
      <form onSubmit={submitHandler}>
          <div className="form-inner">
              <h2>Login</h2>
              {(error != "") ? ( <div className="error">{error}</div>) : ""}
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" id="name" onChange={e => setDetais({...details, name: e.target.value})} value={details.name} />
          </div>
          <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" id="email" onChange={e => setDetais({...details, email: e.target.value})} value={details.email} />
          </div>
          <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" id="password" onChange={e => setDetais({...details, password: e.target.value})} value={details.password} />
          </div>
      </form>
    )
}

export default LoginForm;