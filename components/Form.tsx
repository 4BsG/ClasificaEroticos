import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup';
// import { db } from '../firebase/firebase';
// import { addDoc, collection } from 'firebase/firestore';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const TextInput = ({ label , ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={`text-input ${props.className}`} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const Formulary = () => {
  return (
    <Formik
      initialValues= {{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema= {Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit= {async ( values: Values, { setSubmitting }) => {
        try {
          // const docRef = await addDoc(collection(db, 'Users'), values);
          setSubmitting(false);
          console.log('This are the values: ', values);
        } catch (error) {
          console.error(error)
        }
      }}
    >
      {formik => (
        <div className='flex flex-col items-center my-10'> 
          <h2 className='text-lg font-medium mb-6'>Register</h2>

          <Form
            className="flex flex-col w-1/2 px-6 py-8 rounded-xl bg-slate-900 shadow-lg shadow-slate-900"
            onSubmit={formik.handleSubmit}
          >
            <TextInput
              label="First Name"
              name="firstName"
              type="text"
              className="input"
              placeholder="Enter here"
            />
            <TextInput
              label="Last Name"
              name="lastName"
              type="text"
              className="input"
              placeholder="Enter here"
            />
            <TextInput
              label="Email"
              name="email"
              type="email"
              className="input"
              placeholder="Enter here"
            />
            
            <button
              className="btn btn-primary mt-16"
              type="submit"
            >
              Sign Up
            </button>
            
            <button
              className="btn btn-secondary mt-6"
              type="submit"
            >
              Sign In
            </button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default Formulary
