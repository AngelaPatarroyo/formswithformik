import Link from 'next/link'
import React from 'react'
import { Formik } from 'formik';

/* Registro
- First Name
- Last Name
- Email
-Country
-Zip
-City
-State (DropDown)
-Phone (REGEX)
-Password (REGEX)
-Confirm Pasword
-Accepts conditions (Checkbox)
-Button "Back"
-Button "Registrarme" */

const registro = () => {
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
            <div className='container border p-5 shadow p-3 mb-5 bg-body rounded'>
                <Link href={"/login"}>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary' style={{ width: '400px' }}>Login</button>
                    </div>
                </Link>
                <div className='container d-flex align-items-center justify-content-center mt-3'>
                    <Formik
                        initialValues={{ email: "", password: "", name: "" }}/* objeto con las propiedas que le quieres poner como valor por default */
                        onSubmit={() => { }}/* se encarga de evitar el event.preventDefault(), solo se jecuta cuando no haya ningun error  */
                        validate={values => validateFormik(values)}
                    >
                        {({ values, handleChange, handleBlur, handleSubmit, errors, isSubmitting, touched }) => (

                            <form onSubmit={handleSubmit}>
                                <div className='container'>
                                    <div>
                                        <div className='d-flex justify-content-between mb-3'>
                                            <input
                                                className='form-control w-50 me-1'
                                                name="name"
                                                placeholder="Nombre"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                            />
                                            <input
                                                className='form-control w-50 ms-1'
                                                name="lastName"
                                                placeholder="Apellido"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.lastName}
                                            />

                                        </div>
                                        <input
                                            className='form-control w-100'
                                            name="email"
                                            placeholder="Escribe tu email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        <p className='text-danger'>{errors.email && touched.email && errors.email}</p>
                                        <div className='d-flex justify-content-between mb-3'>
                                            <input
                                                className='form-control w-75 me-1'
                                                name="country"
                                                placeholder="País"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.country}
                                            />
                                            <input
                                                className='form-control w-25 ms-1'
                                                name="city"
                                                placeholder="City"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.city}
                                            />
                                        </div>
                                        <div>
                                            <select className='w-100 form-select'>
                                                <option value='Washington'>Washington</option>
                                                <option value='New York'>New York</option>
                                                <option value='Nevada'>Nevada</option>
                                                <option value='Delaware'>Delaware</option>
                                                
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <input
                                            className='mt-3 form-control'
                                            style={{ width: '350px' }}
                                            name="password"
                                            type="password"
                                            placeholder="Tu Contraseña"
                                            onChange={handleChange}
                                            onBlur={handleBlur}/* ejecutar una accion cuando sales del input */
                                            value={values.password}
                                        />

                                    </div>
                                    <p className='text-danger'>{errors.password && touched.password && errors.password}</p>
                                    <div className='d-flex justify-content-center mt-3'>
                                        <button className='btn btn-success' type="submit" disabled={isSubmitting}>
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
export default registro