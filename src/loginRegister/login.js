import { useState, useEffect } from "react";
import { Link, useHistory} from "react-router-dom";
import "./loginRegister.css";

function Login() {
  const initialValues = {  email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // localStorage.setItem("user", JSON.stringify(formValues));
    // console.log(formValues);
    // history.push('/home');
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        let localemail = localStorage.getItem("email");
        let localpassword = localStorage.getItem("password");
        let email = JSON.stringify(formValues.email);
        let password = JSON.stringify(formValues.password);
        if(localemail == email && localpassword == password ){
            alert("Login Sucess");
            history.push('/home');
        }
        else{
          alert("Details Not Match, Please Register")
        }
        console.log(localemail,localpassword);
        console.log(formValues.email)
        // history.push('/home');
    }
  }, [formErrors,isSubmit,formValues]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 5) {
      errors.password = "Password must be more than 5 characters!";
    } 
    return errors;
  };

  return (
    <div className="container">
      

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        
       <div className="ui divider"></div>
        <div className="ui form">
          
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email:&emsp;&emsp;&nbsp;</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password:&ensp;</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button >Submit</button>
        
        <Link to="/register">
						<button type="button" id="register-btn">
							Register
						</button>
					</Link>
          </div>
      </form>
    </div>
  );
}

export default Login;