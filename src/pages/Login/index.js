
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Login = ({ setUser }) => {
  // Once the user clicks submit, we will mimic log in and conditionally render our nav bar.

  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleChange = e => {
      setUsername(e.target.value)
  }

  const handleSubmit = e => {
      e.preventDefault()
      setUser(username)
      // We can use useNaviage from RR to redirect our users to a different component/ page.
      // Do NOT FORGET the forward / in front of path of navigate.

      navigate('/pokemon/list')
  }

//   console.log('props', props.setUser())
  return (
    <form className="mx-auto border p-2 m-2" id="login-form" onSubmit= {handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputuser1" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputuser1"
          aria-describedby="userHelp"
          value={username}
          onChange={handleChange}
        />
        <div id="userHelp" className="form-text">
          We will lie to you.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
