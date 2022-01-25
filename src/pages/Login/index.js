import React from 'react';
import './styles.css'

const Index = () => {
    return (
        <form className='mx-auto border p-2 m-2' id='login-form'>
  <div className="mb-3">
    <label htmlFor="exampleInputuser1" className="form-label">username address</label>
    <input type="text" className="form-control" id="exampleInputuser1" aria-describedby="userHelp" />
    <div id="userHelp" className="form-text">We will lie to you.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    );
}

export default Index;
