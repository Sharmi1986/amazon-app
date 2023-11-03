import React, { useState } from "react";
import "../Login.css";
import { Link } from "react-router-dom";
// import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { auth } from "./Firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigate('/')
      }
    })
    .catch(error => alert(error.message));
    
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigate('/')
      }
    })
    .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
         alt="Amazon Logo"/>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;























// import React, { useState } from "react";
// import "../Login.css";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';


// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();


//   const signIn = (e) => {
//     e.preventDefault();
    
//     axios.post( 'http://localhost:5000/login', {email, password})
//     .then(result => {
//         console.log(result);
//         if(result.data === "Success"){
//             console.log("Login Success");
//             alert('Login successful!')
//             navigate('/');
//         }
//         else{
//             alert('Incorrect password! Please try again.');
//         }
//     })
//     .catch(err => console.log(err));

//   };
//   const register = (e) => {
//     e.preventDefault();
    
//     axios.post( 'http://localhost:5000/register', { email, password})
//     .then(result => {
//         console.log(result);
//         if(result.data === "Already registered"){
//             alert("E-mail already registered! Please Login to proceed.");
//             navigate('/');
//         }
//         else{
//             alert("Registered successfully! Please Login to proceed.")
//             navigate('/');
//         }
        
//     })
//     .catch(err => console.log(err));


//   };

//   return (
//     <div className="login">
//       <Link to="/">
//         <img
//           className="login__logo"
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
//          alt="Amazon Logo"/>
//       </Link>

//       <div className="login__container">
//         <h1>Sign-in</h1>

//         <form>
//           <h5>E-mail</h5>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <h5>Password</h5>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             type="submit"
//             className="login__signInButton"
//             onClick={signIn}
//           >
//             Sign In
//           </button>
//         </form>

//         <p>
//           By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
//           Sale. Please see our Privacy Notice, our Cookies Notice and our
//           Interest-Based Ads Notice.
//         </p>

//         <button className="login__registerButton" onClick={register}>
//           Create your Amazon Account
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Login;
