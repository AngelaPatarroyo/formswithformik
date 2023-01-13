import { Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Swal from 'sweetalert2';

const login = () => {
    const router = useRouter()
    const handleSubmit = (value) => {
        if (value.email === 'angela@hotmail.com' && value.password === 'Password123!') {
            debugger
            Swal.fire(
                'Estas Adentro!',
                'Disfruta',
                'success'
            ).then((resp) => {
                console.log(resp)
                if (resp.isConfirmed) {
                    /* window.open('https://www.google.com','_blank')  */
                    router.push('/')
                }
            })
        } else {
            Swal.fire(
                'Usuario no Encontrado',
                'Intenta de Nuevo',
                'error'
            )
        }
    }
    const validateFormik = (values) => {
        const errors = {};
        if (!values.email) {/* si de los valores que tengo, en la propiedad email no hay texto hay error y me dice required */
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Required';
        } else if (
            !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.password)
        ) {
            errors.password = 'Invalid, you need to have at least 8 characters, a special character and a number'
        }
        return errors;
    }

    return (

        <>
            <div className='container border p-5 shadow p-3 mb-5 bg-body rounded' style={{ width: '550px', height: '350px', marginTop: '300px' }}>
                <Link href={"/registro"}>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary' style={{ width: '400px' }}>Registro</button>
                    </div>
                </Link>
                <div className='container d-flex align-items-center justify-content-center mt-3'>
                    <Formik
                        initialValues={{ email: "", password: "" }}/* objeto con las propiedas que le quieres poner como valor por default */
                        onSubmit={(data) => { handleSubmit(data) }}/* se encarga de evitar el event.preventDefault(), solo se jecuta cuando no haya ningun error  */
                        validate={values => validateFormik(values)}
                    >
                        {({ values, handleChange, handleBlur, handleSubmit, errors, isSubmitting, touched }) => (

                            <form onSubmit={handleSubmit}>
                                <div className='container'>
                                    <div>
                                        <input className='form-control'
                                            style={{ width: '350px' }}
                                            name="email"
                                            placeholder="Escribe tu email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email} />

                                    </div>
                                    <p className='text-danger'>{errors.email && touched.email && errors.email}</p>
                                    <div>
                                        <input
                                            className='mt-3 form-control'
                                            style={{ width: '350px' }}
                                            name="password"
                                            type="password"
                                            placeholder="Tu Contraseña"
                                            onChange={handleChange}
                                            onBlur={handleBlur}/* ejecutar una accion cuando sales del input */
                                            value={values.password} />

                                    </div>
                                    <p className='text-danger'>{errors.password && touched.password && errors.password}</p>
                                    <div className='d-flex justify-content-center mt-3'>
                                        <button className='btn btn-success' type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default login