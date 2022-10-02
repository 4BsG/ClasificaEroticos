import { Formik, Field, Form, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup';
import { db } from '../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const TextInput = ({ label , ...props }) => {
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

const Form2 = () => {
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
          const docRef = await addDoc(collection(db, 'Users'), values);
          setSubmitting(false);
          console.log(docRef.id);
        } catch (error) {
          console.error(error)
        }
        console.log(values)
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

            <label className='mt-10' htmlFor="lastName">Apellido: </label>
            <Field
              className="mt-1 px-4 py-2 rounded-md bg-slate-700 text-white"
              name="lastName"
              type="text"
            />
            <ErrorMessage name="lastName"/>

            <label className='mt-10' htmlFor="email">Email: </label>
            <Field
              className="mt-1 px-4 py-2 rounded-md bg-slate-700 text-white"
              name="email"
              type="email"
            />
            <ErrorMessage name="email"/>
            
            <button
              className="btn btn-primary mt-16"
              type="submit"
            >
              Registrar
            </button>
            
            <button
              className="btn btn-secondary mt-6"
              type="submit"
            >
              Registrar
            </button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default Form2
