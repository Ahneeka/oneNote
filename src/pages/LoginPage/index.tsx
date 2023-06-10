import { Form, Formik, FormikHelpers, Field, FieldProps } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";

interface IProps {}

function Login(props: IProps) {
  interface ILogin {
    email: string;
    password: string;
  }

  const initalValue: ILogin = {
    email: "",
    password: "",
  };

  const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Required*"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(30, "Password must be at least 30 characters")
      .required("Required*"),
  });

  const onSubmit = (values: ILogin, helpers: FormikHelpers<ILogin>) => {
    console.log(values);
  };
  return (
    <div className="place">
      <div className="div1">
        <img src="/images/logo.svg" className="onenote" alt="" />
        <div className="content">
          <p className="welcome">
            <strong>Welcome back, Kehinde</strong>
          </p>
          <p className="det">Glad you're back,please enter your details</p>
          <div>
            <span>
              <img src="/images/google.png" className="logo" alt="" />
              <h6 className="log">Log in with google</h6>
            </span>
            <h6 className="or">Or</h6>
            <Formik
              onSubmit={onSubmit}
              validationSchema={loginSchema}
              initialValues={initalValue}
            >
              {({ isSubmitting, isValid }) => (
                <Form>
                  <Field name="email">
                    {({ field, meta }: FieldProps) => (
                      <div>
                        <input
                          type="email"
                          placeholder="Email"
                          className="input"
                          {...field}
                         />
                        {meta.touched && meta.error ? <p className="text">{meta.error as string}</p> : null}
                      </div>
                    )}
                  </Field>

                  <Field name="password">
                    {({ field, meta }: FieldProps) => (
                      <div>
                        <input
                          type="text"
                          placeholder="password"
                          className="input"
                        {...field}
                        />
                      {meta.touched && meta.error ? <p className="text">{meta.error as string}</p> : null}
                      </div>
                    )}
                  </Field>

                  <div>
                    <Link to="login" className="link">
                      Forgot Password?
                    </Link>
                  </div>

                  <div>
                    <button className="btn" type="submit" aria-label="">
                      Login
                    </button>
                  </div>
                  
                  <div>
                    <h4 className="acct">Don't have any account? <Link to="/signup" className="link2">Sing up for free</Link></h4>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      <div className="able">
        <div className="right-img">
          <h1 className="lost">Pen & paper get lost,</h1>
          <img src="/images/Group 2.svg" className="ote" alt="" />
          <h1 className="wont">Won't</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
