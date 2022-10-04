import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function RegisterForm() {
  return (
    <div className="card-container  bottom-0 w-full px-sides-sm pt-2.5 rounded-b-none">
      <h2 className="ts-title">Create Your Account</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          phoneNumber: ''
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

          <label htmlFor="confirmPassword" className="ts-label text-xs block">
            Confirm Password
          </label>
          <Field name="confirmPassword" type="password" className="input" />

          <label htmlFor="phone" className="ts-label text-xs block">
            Phone Number
          </label>
          <div className="flex items-center">
            <Field name="number" as="select" className="input w-16">
              <option>+57</option>
            </Field>
            <Field name="phone" className="input ml-3" />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default RegisterForm;
