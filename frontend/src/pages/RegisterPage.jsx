import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { toast } from 'react-toastify';
import { Loader } from "../components/Loader";

import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmedPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [register, {isLoading}] = useRegisterMutation();
    const { userInfo  } = useSelector(store => store.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [userInfo, navigate]);


    const submitHandler = async e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error('Passwords are not that same');
            return;
        }

        try {
            const res = await register({name, email, password}).unwrap();
            dispatch(setCredentials({...res}))
            toast.success(`User, ${res.name} was success register.`);
        } catch (error) {   
            toast.error(error?.data?.message || error.message);
        }
    }

    return (
        <FormContainer>
            <h1>Register</h1>

            <Form onSubmit={submitHandler}>

                <Form.Group className="my-2" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="name" 
                        placeholder="enter name" 
                        value={name} 
                        onChange={e => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="my-2" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="enter email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="my-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="enter password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="my-2" controlId="password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="confirm password" 
                        value={confirmPassword} 
                        onChange={e => setConfirmedPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                {isLoading && <Loader />}

                <Button type='submit' variant='primary' className="mt-3">
                    Register
                </Button>

                <Row className="py-3">
                    <Col>
                        Already have an Account? <Link to='/login'>login</Link>
                    </Col>
                </Row>

            </Form>
        </FormContainer>
    )
}

export default RegisterPage
