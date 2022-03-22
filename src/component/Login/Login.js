import React from 'react';
import { useForm } from 'react-hook-form';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import loginImg from '../../images/login-img.svg'

const Login = () => {
    const { googleSignIn,loginUser } = useAuth();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location=useLocation();
    const onSubmit = data => {
        loginUser(data.email,data.password,navigate,location)
     };
  
    const googleLogin = () => {
        googleSignIn(location,navigate);
    };
    return (
        <div>
                    <h1>Please, LogIn!!</h1>
             <div className="login">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6" data-aos="fade-up">
                     <div className="login_img">
                        <img src={loginImg} alt="" />
                     </div>
                  </div>
                  <div className="col-lg-6" data-aos="fade-up">
                     <div className="form_container">
                     <h2 className="text-center mb-4">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           <input type="email" {...register("email")} placeholder="Email" />
                           <input type="password" {...register("password")} placeholder="Password" />
                           <input className='btn btn-danger' type="submit" value="Login" />
                           <p className="text-center">Do not have any account ? <Link to="/register">Please Register</Link></p>
                           <button onClick={googleLogin} className='btn btn-success text-warning fw-bolder'>Login with Google</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </div>
    );
};

export default Login;