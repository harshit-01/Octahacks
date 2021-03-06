import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import * as Yup from 'yup';
import {createSME} from "../Redux/actions/UserAction.js"
import {useDispatch} from "react-redux"
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <Container>
      <Row>
        <Col md={3}>
        <label htmlFor={props.id || props.name}>{label}</label>
        </Col>
        <Col md={8}>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
            <div className="error text-danger">*{meta.error}</div>
        ) : null}
        </Col>
      </Row>
    </Container>
  );
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <Container>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
            {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error text-danger">*{meta.error}</div>
      ) : null}
    </Container>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Container>
      <Row>
      <Col md={3}>
      <label htmlFor={props.id || props.name}>{label}</label>
      </Col>
      <Col md={8}>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-danger">*{meta.error}</div>
      ) : null}
      </Col>
      </Row>
    </Container>
  );
};
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// And now we can use these
const TutorForm = ()=>{
  const dispatch = useDispatch();
  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
    return;
    }

    setOpenAlert(false);
  };
  const [openAlert,setOpenAlert] = React.useState(false);
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone:'',
          acceptedTerms: false, // added for our checkbox
          jobType: '', // added for our select
        }}

        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(createSME(values))
          setTimeout(() => {
            setOpenAlert(true);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="First Name :"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <br />
          <MyTextInput
            label="Last Name : "
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <br />
          <MyTextInput
            label="Email Address :"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <br />
          <MyTextInput
            label="Phone Number :"
            name="phone"
            type="tel"
            placeholder="9999999999"
          />
          <br />
          <MySelect label="Job Type :" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Physics Teacher</option>
            <option value="development">Maths Teacher</option>
            <option value="product">Coding Teacher</option>
            <option value="other">Other</option>
          </MySelect>

          <MyCheckbox name="acceptedTerms">
            &nbsp;I accept the terms and conditions
          </MyCheckbox>

          <Button type="submit" variant="outline-info">Submit</Button>
        </Form>
      </Formik>
      {openAlert ?
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar anchorOrigin={{ vertical: "top",horizontal: "right"}} open={openAlert} autoHideDuration={4000} onClose={handleCloseAlert}>
                    <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                        Details sent to your email successfully. Please check.
                    </Alert>
                </Snackbar>
                    {/* <Alert severity="success">This is a success message!</Alert> */}
      </Stack>:null}
    </>
  );
};
export default TutorForm ;