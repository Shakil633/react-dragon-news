import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  
  const location = useLocation();

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    //user login
    userLogin(email, password)
      .then((results) => {
        const user = results.user;
        console.log(user);

        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <h2 className="text-3xl text-center mt-10">Login your account</h2>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className=" text-center mt-5">
          Don't Have An Account?{" "}
          <Link to={"/register"} className=" text-[#f8615c]">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
