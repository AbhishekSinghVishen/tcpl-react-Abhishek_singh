import { Formik, Form, Field, ErrorMessage } from 'formik';  // Importing necessary components from Formik for form handling.
import React from 'react';
import * as Yup from 'yup';
import '../CSS/SignUpForm.css'; // Importing custom CSS for additional styling

const SignUpForm = () => {
  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-xs-12 col-sm-12 col-md-6'>
          <div className='card p-4'>
            <h2 className='text-center mb-4'>Sign Up</h2>
            <Formik
              initialValues={{
                fullname: '',
                email: '',
                password: '',
                confirmpassword: '',
              }}
              validationSchema={Yup.object({
                // Validation schema using Yup
                fullname: Yup.string()
                  .min(3, 'Must be at least 3 characters') // Full name must be at least 3 characters long
                  .required('Required'), // Full name is required
                email: Yup.string()
                  .email('Invalid email') // Email must be in a valid format
                  .required('Please enter a valid email'), // Email is required
                password: Yup.string()
                  .min(6, 'Must be at least 6 characters') // Password must be at least 6 characters long
                  .matches(/[0-9]/, 'Must contain a number') // Password must contain a number
                  .matches(/[!@#$%^&*]/, 'Must contain a special character') // Password must contain a special character
                  .required('Required'), // Password is required
                confirmpassword: Yup.string()
                  .oneOf([Yup.ref('password'), null], 'Passwords must match') // Confirm password must match the password
                  .required('Required'), // Confirm password is required
              })}
              onSubmit={(values, { setSubmitting }) => {
                // Function to handle form submission
                alert(JSON.stringify(values, null, 2)); // Show an alert with the form values
                setSubmitting(false); // Set submitting to false to reset the form
              }}
            >
              <Form>
                <div className='form-group'>
                  <Field className='form-control' name='fullname' type='text' placeholder='Full Name' />
                  <ErrorMessage component='div' className='text-danger' name='fullname' />
                </div>
                <div className='form-group'>
                  <Field className='form-control' name='email' placeholder='Email' type='email' />
                  <ErrorMessage component='div' className='text-danger' name='email' />
                </div>
                <div className='form-group'>
                  <Field className='form-control' name='password' placeholder='Password' type='password' />
                  <ErrorMessage component='div' className='text-danger' name='password' />
                </div>
                <div className='form-group'>
                  <Field className='form-control' name='confirmpassword' placeholder='Confirm Password' type='password' />
                  <ErrorMessage component='div' className='text-danger' name='confirmpassword' />
                </div>
                <div className='text-center'>
                  <button className='btn btn-primary' type='submit'>
                    Sign Up
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
