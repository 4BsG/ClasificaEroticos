import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/firebase';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  accepted?: boolean;
}

export const Postform = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
      // accepted: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Nombre no ingresado'),
      lastName: Yup.string().required('Apellido no ingresado'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Por favor ingresa un email valido')
      // accepted: Yup.bool().isTrue(),
    }),
    onSubmit: async (values: Values) => {
      try {
        const docRef = await addDoc(collection(db, 'users'), values);
        console.log(docRef.id);
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <div className="flex flex-col items-center my-10">
      <h2 className="text-lg font-medium mb-6">Register</h2>

      <form
        className="flex flex-col w-1/2 px-6 py-8 rounded-xl bg-slate-900 shadow-lg shadow-slate-900"
        onSubmit={formik.handleSubmit}
      >
        <label htmlFor="firstName">Nombre: </label>
        <input
          className="mb-10 mt-1 px-4 py-2 rounded-md bg-slate-700 text-white"
          id="firstName"
          name="firstName"
          value={formik.values.firstName}
          type="text"
          onChange={formik.handleChange}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <span className="text-red-400">{formik.errors.firstName}</span>
        ) : null}

        <label htmlFor="lastName">Apellido: </label>
        <input
          className="mb-10 mt-1 px-4 py-2 rounded-md bg-slate-700 text-white"
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
          type="text"
          onChange={formik.handleChange}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <span className="text-red-400">{formik.errors.lastName}</span>
        ) : null}

        <label htmlFor="email">Email: </label>
        <input
          className="mb-10 mt-1 px-4 py-2 rounded-md bg-slate-700 text-white"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email ? (
          <span className="text-red-400">{formik.errors.email}</span>
        ) : null}

        <button
          className="rounded-md py-2 mt-6 bg-green-500 hover:bg-green-700"
          type="submit"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};
