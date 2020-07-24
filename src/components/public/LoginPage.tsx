import React from 'react';
import {Form, Button, FormLabel} from 'react-bootstrap';

export const LoginPage = () => {

    return (
        <>
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
        <Form className="text-left">
        <Form.Group>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </Form.Group>
        <Form.Group>
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </Form.Group>
        <Button type="submit" className="btn-primary">Login</Button>
        </Form>
        </div>
        </>
    );
}
