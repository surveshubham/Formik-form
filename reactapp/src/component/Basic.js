import React, { useContext, useState, } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Table from './Table';
import NoteContext from '../Context/NoteContext'

const Basic = () => {

    const context = useContext(NoteContext);
    const {addnotes} = context;

    const [data, setdata] = useState({
        name: "",
        Date: "",
        Sex: "",
        Mobile: "",
        id: "",
        Value: "",
        Guarid: "",
        Guarname: "",
        Email: "",
        Emobileno: "",
        Address: "",
        State: "",
        City: "",
        Country: "India",
        Pincode: "",
        Occupation: "",
        Religion: "",
        Marital: "",
        Blood: "",
        Nationality: "India",
    })

    const defaultValue = {
        name: "",
        Date: "",
        Sex: "",
        Mobile: "",
        id: "",
        Value: "",
        Guarid: "",
        Guarname: "",
        Email: "",
        Emobileno: "",
        Address: "",
        State: "",
        City: "",
        Country: "India",
        Pincode: "",
        Occupation: "",
        Religion: "",
        Marital: "",
        Blood: "",
        Nationality: "India",
    }


    const ValidationSchema = Yup.object().shape({
        name: Yup.string().required(' name is Required'),
        Email: Yup.string().email('Invalid email').required('This field is Required*'),
        Date: Yup.string().required(' Date is Required'),
        Sex: Yup.string().required('please select gender'),
        Occupation: Yup.string().required('please put Occupation'),
        Mobile: Yup.string()
            .min(10, 'must be at least 10 characters')
            .max(12, 'Too Long!')
            .required('Required'),
        id: Yup.string().required('( Goverment id is required )'),
        Value: Yup.string().required(' value is required'),
        Guarid: Yup.string().required('( Guardian is required )'),
        Guarname: Yup.string().required('( Guardian name is required)'),
        Emobileno: Yup.string()
            .min(10, 'must be at least 10 characters')
            .max(12, 'Too Long!')
            .required('Required'),
        Address: Yup.string().required('address is required'),
        State: Yup.string().required('state is required'),
        City: Yup.string().required('city is required'),
        Pincode: Yup.string().required('pincode is required'),
        Marital: Yup.string().required('please select')
    });


    const onSubmitS = (values) => {
        // console.log(values)
        setdata({
            name: values.name,
            Date: values.Date,
            Sex: values.Sex,
            Mobile: values.Mobile,
            id: values.id,
            Value: values.Value,
            Guarid: values.Guarid,
            Guarname: values.Guarname,
            Email: values.Email,
            Emobileno: values.Emobileno,
            Address: values.Address,
            State: values.State,
            City: values.City,
            Country: values.Country,
            Pincode: values.Pincode,
            Occupation: values.Occupation,
            Religion: values.Religion,
            Marital: values.Marital,
            Blood: values.Blood,
            Nationality: values.Nationality,
        });

        addnotes(values.name,values.Mobile, values.Sex,values.Email)
        alert("user has been added to the database");
    }

    return (
        <div>
            <Formik
                initialValues={defaultValue}
                validationSchema={ValidationSchema}
                onSubmit={onSubmitS}>

                <Form >

                    <div className="border container">
                        <div className=" text-left ">
                            <h5 className="alert alert-primary">PERSONAL DETAILS</h5>
                            <div className="row align-items-start">

                                <div className="col mb-3">
                                    <label className="col-form-label db">Name</label>
                                    <Field name="name" type="text" ></Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="name"></ErrorMessage>
                                    </p>
                                </div>

                                <div className="col mb-3 ">
                                    <label className="col-form-label db">Date of birth</label>
                                    <Field name="Date" type="Date"></Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="Date"></ErrorMessage>
                                    </p>
                                </div>


                                <div className="col mb-3">
                                    <label className="col-form-label db">Sex</label>
                                    <Field component="select" name="Sex" as="select">
                                        <option value="" disabled>please select gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="Sex"></ErrorMessage>
                                    </p>
                                </div>


                            </div>
                        </div>

                        <div className="container text-left">
                            <div className="row justify-content-start">

                                <div className="col-4">
                                    <label className="col-form-label db">Mobile</label>
                                    <Field name="Mobile" type="number"></Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="Mobile"></ErrorMessage>
                                    </p>
                                </div>

                                <div className="col-4">
                                    <label className="col-form-label db">Gov-id</label>
                                    <Field component="select" name="id" as="select">
                                        <option value="" disabled>select</option>
                                        <option value="panid">pancard</option>
                                        <option value="adharid">adharcard</option>
                                    </Field>
                                    <Field name="Value" type="text" placeholder="enter gov id"></Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="id"></ErrorMessage>
                                        <ErrorMessage name="Value"></ErrorMessage>
                                    </p>


                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="border container ">
                        <div className="  text-left ">
                            <h5 className="alert alert-primary">CONTACT DETAILS</h5>
                            <div className="row align-items-start">

                                <div className="col mb-3">
                                    <label className="col-form-label db">Guardian</label>
                                    <Field component="select" name="Guarid" as="select">
                                        <option value="" disabled>select</option>
                                        <option value="parent">parents</option>
                                        <option value="relative">relative</option>
                                    </Field>
                                    <Field name="Guarname" type="text" placeholder="enter guardian name"></Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="Guarid"></ErrorMessage>
                                        <ErrorMessage name="Guarname"></ErrorMessage>
                                    </p>
                                </div>

                                <div className="col mb-3">
                                    <label className="col-form-label db">Email</label>
                                    <Field name="Email" type="text" placeholder=""></Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="Email"></ErrorMessage>
                                    </p>
                                </div>

                                <div className="col mb-3">
                                    <label className="col-form-label db">Emergency no</label>
                                    <Field name="Emobileno" type="number"></Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="Emobileno"></ErrorMessage>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="border container ">
                        <div className="  text-left ">
                            <h5 className="alert alert-primary">Address Details</h5>
                            <div className="row align-items-start">

                                <div className="col mb-3">
                                    <label className="col-form-label db">Address</label>
                                    <Field name="Address" type="text" placeholder=""></Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="Address"></ErrorMessage>
                                    </p>
                                </div>



                                <div className="col mb-3">
                                    <label className="col-sm-2 col-form-label">State</label>
                                    <Field component="select" name="State" as="select">
                                        <option value="" disabled>select</option>
                                        <option value="Maharshtra">Maharshtra</option>
                                        <option value="Dehli">Dehli</option>
                                    </Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="State"></ErrorMessage>
                                    </p>
                                </div>


                                <div className="col mb-3">
                                    <label className="col-sm-2 col-form-label">City</label>
                                    <Field component="select" name="City" as="select">
                                        <option value="" disabled>select</option>
                                        <option value="Maharshtra">Mumbai</option>
                                        <option value="Dehli">noida</option>
                                    </Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="City"></ErrorMessage>
                                    </p>
                                </div>

                            </div>

                            <div className="row justify-content-start">

                                <div className="col-4">
                                    <label className="col-sm-2 col-form-label">Country</label>
                                    <Field name="Country" type="text" placeholder="India"></Field>
                                </div>


                                <div className="col-4">
                                    <label className="col-sm-2 col-form-label">Pincode</label>
                                    <Field name="Pincode" type="text" placeholder="Enter your pincode"></Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="Pincode"></ErrorMessage>
                                    </p>
                                </div>


                            </div>
                        </div>



                    </div>

                    <div className="border container ">
                        <div className="  text-left ">
                            <h5 className="alert alert-primary">Other Details</h5>
                            <div className="row align-items-start">

                                <div className="col mb-3">
                                    <label className="col-form-label db">Occupation</label>
                                    <Field name="Occupation" type="text" placeholder="Enter Occupation"></Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="Occupation"></ErrorMessage>
                                    </p>
                                </div>



                                <div className="col mb-3">
                                    <label className="col-sm-2 col-form-label">Religion</label>
                                    <Field name="Religion" as="select">
                                        <option value="" disabled>select</option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Bihari">Bihari</option>
                                        <option value="Muslim">Muslim</option>
                                    </Field>
                                </div>


                                <div className="col mb-3">
                                    <label className="col-form-label db">Marital Status</label>
                                    <Field name="Marital" component="select" as="select">
                                        <option value="" disabled>select</option>
                                        <option value="Married">Married</option>
                                        <option value="unMarried">unMarried</option>
                                    </Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="Marital"></ErrorMessage>
                                    </p>
                                </div>

                            </div>

                            <div className="row justify-content-start">

                                <div className="col mb-3">
                                    <label className="col-form-label db">Blood group</label>
                                    <Field name="Blood" as="select">
                                        <option value="" disabled>select</option>
                                        <option value="A+">A+</option>
                                        <option value="A">A</option>
                                        <option value="B+">B+</option>
                                        <option value="B">B</option>
                                        <option value="O">O</option>
                                    </Field>
                                </div>


                                <div className="col-4">
                                    <label className="col-form-label db">Nationality</label>
                                    <Field name="Nationality" type="text" placeholder="india"></Field>
                                </div>



                            </div>
                        </div>

                        <button className="btn btn-success" type="submit">submit</button>

                    </div>


                </Form>
            </Formik>
            <Table data={data}></Table>
        </div>


    )
}

export default Basic


