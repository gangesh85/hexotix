import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import TextError from "./TextError";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate()

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("Invalid email"),
  });

  const onSubmit = (value) => {
    console.log(value);
    navigate('/')
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="resetPwd">
        <h3>Reset Password</h3>
        <hr />
        <div>
          <label htmlFor="name">Email</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ForgetPassword;
