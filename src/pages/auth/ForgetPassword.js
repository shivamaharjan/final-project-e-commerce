import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CustomInput from "../../components/customInput/CustomInput";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { resetPassword } from "../../redux/auth/userAction";

const inputs = [
  {
    label: "Email *",
    name: "email",
    type: "email",
    placeholder: "xyz@xyz.com",
    required: true,
  },
];

function ForgetPassword() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { email } = formData;
    dispatch(resetPassword(email));
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
              Forget Password
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ForgetPassword;
