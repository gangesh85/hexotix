import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    fName: "",
    lName: "",
    email: "",
    address: "",
    country: "",
    gender: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    navigate("/");
  };

  const validationSchema = Yup.object({
    fName: Yup.string().required("Required"),
    lName: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Invalid email"),
    address: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    phone: Yup.number().required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="register">
        <h3>Registration Form</h3>
        <hr />
        <div>
          <label htmlFor="fName">First Name</label>
          <Field type="text" id="fName" name="fName" />
          <ErrorMessage name="fName" component={TextError} />
        </div>

        <div>
          <label htmlFor="lName">Last Name</label>
          <Field type="text" id="lName" name="lName" />
          <ErrorMessage name="lName" component={TextError} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <Field type="text" id="address" name="address" />
          <ErrorMessage name="address" component={TextError} />
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <Field type="text" id="country" name="country" />
          <ErrorMessage name="country" component={TextError} />
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <Field type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Male</label>
          <Field type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
          <ErrorMessage name="gender" component={TextError} />
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <Field type="text" id="phone" name="phone" />
          <ErrorMessage name="phone" component={TextError} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component={TextError} />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field type="password" id="confirmPassword" name="confirmPassword" />
          <ErrorMessage name="confirmPassword" component={TextError} />
        </div>
        <hr />
        <div>
          <button type="submit">Register</button>
        </div>
        <div>
          already have account ? <Link to="/">Login</Link>
        </div>
      </Form>
    </Formik>
  );
};
