import React from 'react'

import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import './Add.css'
import axios from 'axios';
function Add () {
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
          .min(3, 'Too Short!')
          .max(40, 'Too Long!')
          .required('Required'),
        description: Yup.string()
          .min(3, 'Too Short!')
          .max(40, 'Too Long!')
          .required('Required'),
        auther: Yup.string()
          .min(3, 'Too Short!')
          .max(40, 'Too Long!')
          .required('Required'),
        price: Yup.number()
          
         
      });
  return (
    <>
    <div className='formContainer'>
     <h1>Add Course</h1>
     <Formik
       initialValues={{
         name: '',
         description: '',
         auther: '',
         price:'',
        
       }}
       validationSchema={SignupSchema}
       onSubmit={(values, {resetForm}) => {
         axios.post('http://localhost:8080/api/products', values).then((res)=>console.log(res.data))
         resetForm();
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
            <div className='form' >

            <Field name="name" placeholder='Name' className='input'/>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <Field name="description" placeholder='description'className='input' />
           {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}


           <Field name="auther"   placeholder='Auther' className='input'/>
           {errors.auther && touched.auther ? <div>{errors.auther}</div> : null}



           <Field name="price" placeholder='Price' type='number' className='input' />
           {errors.price && touched.price ? <div>{errors.price}</div> : null}



        



           <button className='addBtn' type="submit">Submit</button>
            </div>
           
         </Form>
       )}
     </Formik>
   </div>
   
    </>
  )
}

export default Add