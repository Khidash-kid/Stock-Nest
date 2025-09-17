import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";

function Login() {
   const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3005/login",
        {
          ...inputValue,
        },
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        // handleSuccess(message);
        setTimeout(() => {
          window.open("https:localhost:3001","_blank");
        }, 1000);
      } else {
        // handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };
    return (  
      <div className='container mt-5 mb-5'>
       <div className='row'>
        <div className='col-4'></div>
        <div className='col-4'>
         <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input  type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange} 
            class="form-control" id="exampleInputPassword1"
            />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input  type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange} 
            class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group">
   <span>
          Dont have an account? <Link to={"/SignIn"}>SigUp</Link>
   </span>
   </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
   </form>
</div>
<div className='col-4'></div>
</div>
      </div>  
    );
}

export default Login;


// const Login = () => {
 

//   return (
//     <div className="form_container">
//       <h2>Login Account</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             placeholder="Enter your email"
//             onChange={handleOnChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             placeholder="Enter your password"
//             onChange={handleOnChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//         <span>
//           Already have an account? <Link to={"/signup"}>Signup</Link>
//         </span>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;