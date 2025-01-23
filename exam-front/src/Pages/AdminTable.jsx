import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function AdminTable() {
    const [data, setdata] = useState([]);

    function getData() {
        fetch("http://localhost:3000/aromas/")
            .then(res => res.json())
            .then(data => setdata(data))
    }
    useEffect(() => {
        getData()
    }, [])

   function  createelement(obj) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('http://localhost:3000/aromas/', requestOptions)
            .then(response => response.json())
           

    }
    useEffect(() => {
        createelement()
    }, [])
    

    
    return (
        <div >
           
            <div style={{ display: 'flex', justifyContent: 'center' }}>



                <table border={1} >
                    <thead>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {data.map((x) =>
                            <tr key={x._id}>
                                <td><img src={x.image} alt="" style={{ width: '100px', height: '100px' }} /></td>
                                <td>{x.description}</td>
                                <td>{x.name}</td>
                                <td>{x.price}</td>
                                <td><button>Delete</button></td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
            <div >
                <Formik
                    initialValues={{ image: '', desription: '', name: '', price: '' }}
                    validationSchema={Yup.object({
                        image: Yup.string()
                            .required('Required'),
                        desription: Yup.string()
                            .required('Required'),
                        desription: Yup.string().required('Required'),
                        price: Yup.string().required('Required'),
                    })}
                    onSubmit={(values) => {
                        createelement(values)
                    }}
                >
                    <Form>
                        <label htmlFor="image">image</label>
                        <Field name="image" type="text" />
                        <ErrorMessage name="image" />

                        <label htmlFor="desription">desription</label>
                        <Field name="desription" type="text" />
                        <ErrorMessage name="desription" />

                        <label htmlFor="name">name</label>
                        <Field name="name" type="text" />
                        <ErrorMessage name="name" />

                        <label htmlFor="price">price</label>
                        <Field name="price" type="text" />
                        <ErrorMessage name="price" />

                        <button type="submit">ADD</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default AdminTable
