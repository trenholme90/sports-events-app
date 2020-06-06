import React, { useState } from 'react';
import api from '../../services/api';
import { Button, Form, FormGroup, Input, Container } from 'reactstrap';

// history argument sent from router to check against navigation
export default function Register({ history }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = async evt => {
        //prevents page refresh to not lose form values on submit
        evt.preventDefault();
        console.log(`result of submit: ${email}, ${[password]}, ${[firstName]}, ${[lastName]}`)

        // api expects object as 2nd argument
        const response = await api.post('/user/register', { email, password, firstName, lastName });
        // api will return the userId if it exists in db
        const userId = response.data._id || false

        if (userId) {
            localStorage.setItem('user', userId);
            history.push('/dashboard')
        } else {
            const message = response.data;
            console.log(message);
        }
    }

   return (
    <Form onSubmit={handleSubmit} inline>
        <Container>
            <h2>Register</h2>
            <p>Register for a new account</p>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="text" name="FirstName" id="FirstName" placeholder="Your First Name" onChange={evt => setFirstName(evt.target.value)} />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="text" name="LastName" id="LastName" placeholder="Your Last Name" onChange={evt => setLastName(evt.target.value)} />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="email" name="email" id="exampleEmail" placeholder="Your email" onChange={evt => setEmail(evt.target.value)} />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="password" name="password" id="examplePassword" placeholder="Your password" onChange={evt => setPassword(evt.target.value)} />
            </FormGroup>
            <Button>Submit</Button>
        </Container>
    </Form>
   ) 
}
