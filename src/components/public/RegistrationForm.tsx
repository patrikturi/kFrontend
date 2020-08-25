import React, {useContext} from 'react';
import {Card, Form, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import { SiteContext } from '../../context/SiteContext';

type RegProps = {
    onGoBack: (e: React.FormEvent<HTMLElement>) => void;
};

export const RegistrationForm = (props: RegProps) => {

    const [, dispatch] = useContext(SiteContext);

    const handleRegister = () => {
        dispatch({type: 'LOGIN_SUCCESS'});
    }

    return (
        <>
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
        <Card style={{ width: '20rem' }}>
        <Card.Header className="text-left">
            <a href="/" onClick={props.onGoBack}>
                <FontAwesomeIcon icon={faAngleDoubleLeft} size="lg" />
            </a> Go back
        </Card.Header>
        <Card.Body className="text-left">
        <h2>Login</h2>
        <Form>
        <Form.Group>
            <label htmlFor="exampleInputEmail1">SL First Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter First Name"/>
        </Form.Group>
        <Form.Group>
            <label htmlFor="exampleInputEmail1">SL Last Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter Last Name" defaultValue="Resident"/>
        </Form.Group>
        <Form.Group>
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password"/>
        </Form.Group>
        <Button type="submit" className="btn-primary" onClick={handleRegister}>Log in</Button>
        </Form>
        </Card.Body>
        </Card>
        </div>
        </>
    )
};
