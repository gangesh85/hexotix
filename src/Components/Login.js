import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    navigate("WelcomeScreen");
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("required").email("Invalid email"),
    password: Yup.string().required("required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="login">
        <h3>Login</h3>
        <hr />
        <div>
          <label htmlFor="name">Email</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field
            type={show ? "text" : "password"}
            id="password"
            name="password"
          />
          <label onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</label>
          <ErrorMessage name="password" component={TextError} />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
        <hr />
        <div>
          Don't have account? <Link to="register">Register</Link>
        </div>
        <div>
          <Link to="forgetPassword">Forget password?</Link>
        </div>
        <Outlet />
      </Form>
    </Formik>
  );
}

export default Login;
