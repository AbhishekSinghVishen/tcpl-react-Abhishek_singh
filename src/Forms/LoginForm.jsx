import { Formik, Form, Field, ErrorMessage } from 'formik';  // Importing necessary components from Formik for form handling
import React from 'react';
import * as Yup from 'yup';
import '../CSS/LoginForm.css'; // Importing custom CSS for additional styling

const LoginForm = () => {
  return (
    <div className='container mt-5'>  {/* Main container with Bootstrap classes for styling */}
      <div className='row justify-content-center'>  {/* Centering the form horizontally */}
        <div className='col-xs-12 col-sm-12 col-md-6'>  {/* Defining the column size for different screen sizes */}
          <div className='card p-4'>  {/* Bootstrap card for form container */}
            <h2 className='text-center mb-4'>Login</h2>  {/* Form title */}
            
            <Formik
              initialValues={{  // Initial values for the form fields
                email: '',
                password: '',
              }}
              validationSchema={Yup.object({  // Validation rules defined using Yup
                email: Yup.string()
                  .email('Invalid email')  // Email must be in a valid format
                  .required('Please enter a valid email'),  // Email is required
                password: Yup.string()
                  .min(6, 'Must be at least 6 characters')  // Password must be at least 6 characters long
                  .required('Required'),  // Password is required
              })}
              onSubmit={(values, { setSubmitting }) => {  // Function to handle form submission
                alert(JSON.stringify(values, null, 2));  // Display form values in an alert
                setSubmitting(false);  // Set submitting to false to reset the form
              }}
            >
              <Form>  {/* Formik Form component */}
                <div className='form-group'>  {/* Form group for email field */}
                  <Field className='form-control' name='email' placeholder='Email' type='email' />  {/* Email field */}
                  <ErrorMessage component='div' className='text-danger' name='email' />  {/* Error message for email field */}
                </div>
                <div className='form-group'>  {/* Form group for password field */}
                  <Field className='form-control' name='password' placeholder='Password' type='password' />  {/* Password field */}
                  <ErrorMessage component='div' className='text-danger' name='password' />  {/* Error message for password field */}
                </div>
                <div className='text-center'>  {/* Centering the submit button */}
                  <button className='btn btn-primary' type='submit'>  {/* Submit button */}
                    Login
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

export default LoginForm;
