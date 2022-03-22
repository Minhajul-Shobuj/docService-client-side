import React from 'react';
import { useForm } from 'react-hook-form';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import loginImg from '../../images/register-img.svg'
import './Register.css'

const Register = () => {
    // use form
   const { register, handleSubmit, reset } = useForm();
   // auth
   const { registerUser,googleSignIn } = useAuth();
   // history
   const navigate = useNavigate()
   //location
   const location=useLocation();
   // submit form
   const onSubmit = data => {
      registerUser(data.email, data.password, data.name, navigate,reset)
   };
   const googleLogin = () => {
      googleSignIn(location,navigate);
  };

   return (
      <>
        <h1>Please, Register!!</h1>
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
                        <h2 className="text-center mb-4">Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           <input type="text" {...register("name")} placeholder="Name" />
                           <input type="email" {...register("email")} placeholder="Email" />
                           <input type="password" {...register("password")} placeholder="Password" />
                           <input className='btn btn-danger' type="submit" value="Register" />
                           <p className="text-center">Already Register ? <Link to="/login">Please Login</Link></p>
                           <button onClick={googleLogin} className='btn btn-success text-warning fw-bolder'>Login with Google</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </>
    );
};

export default Register;