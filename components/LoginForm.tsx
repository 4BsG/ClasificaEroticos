import { Formik, Field, Form, ErrorMessage } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';

// interface Values {
//   email: string;
// }

function LoginForm() {
  return (
    <div className="card-container  bottom-0 w-full px-sides-sm pt-2.5 rounded-b-none">
      <h2 className="ts-title">Welcome Back</h2>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required')
        })}
        onSubmit={() => {}}
      >
        <Form>
          <label htmlFor="email" className="ts-label text-xs block">
            Email
          </label>
          <Field name="email" type="email" className="input" />
          <ErrorMessage name="email" />
          <label htmlFor="password" className="ts-label text-xs block">
            Password
          </label>
          <Field name="password" type="password" className="input" />
          <Link href={'/'}>
            <p className="ts-link text-xs text-end underline mb-10">
              Forgot Password?
            </p>
          </Link>
          <div className="flex items-center">
            <Field
              name="checkbox"
              type="checkbox"
              className="bg-background-dark"
            ></Field>
            <label
              htmlFor="checkbox"
              className="text-left text-xs font-poppins font-normal leading-1.4 text-color-text not-italic ml-2"
            >
              Keep me logged in for 60 days
            </label>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Sign in
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
