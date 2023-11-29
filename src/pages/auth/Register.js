import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import CustomInput from "../../components/customInput/CustomInput";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { createAdminUser } from "../../redux/auth/userAction";
import { useDispatch } from "react-redux";

const inputs = [
  {
    label: "First Name *",
    name: "fName",
    type: "text",
    placeholder: "Sam",
    required: true,
  },
  {
    label: "Last Name *",
    name: "lName",
    type: "text",
    placeholder: "Smith",
    required: true,
  },
  {
    label: "Phone",
    name: "phone",
    type: "number",
    placeholder: "044******",
  },
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
  },
  {
    label: "Confirm Password *",
    name: "confirmPassword",
    type: "password",
    placeholder: "********",
    required: true,
  },
];

function Register() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
    console.log(formData);
  }
  const handleOnSubmit = (e) => {
    e.preventdefault();
    const {password, confirmPassword} = formData;
    if( password!==confirmPassword ) {
      toast.error ("Password and Confirm Password donot match")
      return;
    }
    dispatch(createAdminUser(formData));


  }

  return (
    <div>
      <Header />
      <div className="main">
        <Form className="login-form mt-3 mb-3 border p-5 shadow-lg " onSubmit={handleOnSubmit}>
          {inputs.map((input) => {
            return <CustomInput key={input.label} {...input} onChange={handleOnChange}/>;
          })}
          <Button variant="primary" type="submit">
            Register Admin
          </Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
