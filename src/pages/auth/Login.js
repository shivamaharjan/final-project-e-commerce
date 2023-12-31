import React, { useEffect, useState } from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import CustomInput from '../../components/customInput/CustomInput';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginAdminUser } from '../../redux/auth/userAction';
import { Link, useNavigate } from 'react-router-dom';

const inputs = [
  {
    label: "Email *",
    name: "email",
    type: "email",
    placeholder: "xyz@xyz.com",
    required: true,
  },
  {
    label: "Password *",
    name: "password",
    type: "password",
    placeholder: "********",
    required: true,
    minLength: 6,
  },
];



function Login() {

   

  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userInfo.user);

useEffect(() => {
     // If user is logged in, then navigate them to dashboard
     if (userInfo.uid) {
       navigate("/dashboard");
     }
   }, [userInfo]);

   const handleOnChange = (e) => {
     const { name, value } = e.target;
     setFormData({
       ...formData,
       [name]: value,
     });
   };

    const handleOnSubmit = (e) => {
      // stop page from refreshing, which is a default behavior
      e.preventDefault();
      // LoginAction Handler
      const { email, password } = formData;
      dispatch(loginAdminUser(email, password));
    };


  return (
    <div>
      <Header />
      <div className="main">
        <div>
          <Form
            onSubmit={handleOnSubmit}
            className="login-form mt-3 mb-3 border p-5 shadow-lg "
          >
            {inputs.map((input) => {
              return (
                <CustomInput
                  key={input.label}
                  {...input}
                  onChange={handleOnChange}
                />
              );
              // return <CustomInput label="First Name *" name="fName" ... />
            })}

            <Button variant="primary" type="submit">
              Login
            </Button>

            <div className="mt-2">
              Forget Password? <Link to="/forget-password">Click here</Link>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login