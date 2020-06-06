import React, { useState } from 'react';
import api from '../../services/api';
import { Button, Form, FormGroup, Input, Container, Label } from 'reactstrap';
import cameraIcon from '../../assets/camera.png'

export default function Events() {
    const user_id = localStorage.getItem('user')
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ thumbnail, setThumbnail ] = useState('');
    const [ sport, setSport ] = useState('');
    const [ date, setDate ] = useState('');

    const submitHandler = () => {
        return ""
    }

    return (
        <Container>
            <h3>Create Your Event</h3>
            <Form onSubmit={submitHandler}>
                <FormGroup>
                    <Label className="mr-sm-2">Upload image: </Label>
                    <Input id="thumbnail" type="file" onChange={(evt) => setThumbnail(evt.target.files[0])}></Input>
                    <img src={cameraIcon} style={{ maxWidth: '50px' }} alt="Upload your image"></img>
                </FormGroup>
                <FormGroup>
                    <Label className="mr-sm-2">Sport: </Label>
                    <Input id="sport" type="text" value={sport} placeholder={'Sport Name'} onChange={(evt) => setSport(evt.target.value)}></Input>
                </FormGroup>
                <FormGroup>
                    <Label className="mr-sm-2">Title: </Label>
                    <Input id="title" type="text" value={title} placeholder={'Event Title'} onChange={(evt) => setSport(evt.target.value)}></Input>
                </FormGroup>
                <FormGroup>
                    <Label className="mr-sm-2">Event Description: </Label>
                    <Input id="description" type="text" value={title} placeholder={'Set description'} onChange={(evt) => setSport(evt.target.value)}></Input>
                </FormGroup>
                <FormGroup>
                    <Label className="mr-sm-2">Event Price: </Label>
                    <Input id="price" type="text" value={price} placeholder={'Event Price £0.00'} onChange={(evt) => setSport(evt.target.value)}></Input>
                </FormGroup>
                <Button type="submit">Create Event</Button>
            </Form>
        </Container>
    ) 
}
