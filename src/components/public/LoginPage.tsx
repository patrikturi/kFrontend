import React, {useContext} from 'react';
import {Form, Button} from 'react-bootstrap';
import {SiteContext} from '../../context/SiteContext';

export const LoginPage = () => {
    const [, dispatch] = useContext(SiteContext);

    const handleLogin = () => {
        dispatch({type: 'LOGIN_SUCCESS'});
    }

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
        <Button type="submit" className="btn-primary" onClick={handleLogin}>Login</Button>
        </Form>
        </div>
        </>
    );
}
