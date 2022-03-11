import React from 'react';



function  Login (){
  return (
    <div >
         
    <form  className="de" >
    <h3  id="Titleh3" >Sign In</h3>
    <div className="form-group">
        <label id="Titleh3"  >Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" />
    </div>
    <div className="form-group">
        <label id="Titleh3"  >Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
    </div>
    <div className="form-group">
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1" id="Titleh3"  >Remember me</label>
        </div>
    </div>
    <button type="submit" className="btn btn-primary btn-block" id="Titleh3" >Submit</button>
    <p id="Titleh3"  className="forgot-password text-right">
        Forgot <a  href="#">password?</a>
    </p>
</form>
</div>
);

}

export default Login;