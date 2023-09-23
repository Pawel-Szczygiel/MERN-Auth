import { useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmedPassword] = useState('');


    const submitHandler = async e => {
        e.preventDefault();
        console.log('submit')
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
                
                <Button type='submit' variant='primary' className="mt-3">
                    Register
                </Button>

                <Row className="py-3">
                    <Col>
                        Alredy have an Account? <Link to='/login'>login</Link>
                    </Col>
                </Row>

            </Form>
        </FormContainer>
    )
}

export default RegisterPage
