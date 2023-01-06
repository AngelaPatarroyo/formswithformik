import Link from 'next/link'
import React from 'react'
import { Formik } from 'formik';


const registro = () => {
    return (
        <div>
            <Link href={"/login"}>
                <button>Login</button>
            </Link>
        </div>
    )
}

export default registro