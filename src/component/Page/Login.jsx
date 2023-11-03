import { Link } from "react-router-dom";


const Login = () => {
    return (
       <div>
         <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="text-center">
      <p className="text-xl font-bold mb-5">Are you new?</p><Link className="text-xl font-bold mb-5 text-blue-600" to={'/signin'}>Sign In</Link>
      </div>
       </div>
    );
};

export default Login;