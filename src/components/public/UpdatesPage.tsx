import React from 'react';
import {Card} from 'react-bootstrap';

export const UpdatesPage = () => {

    return (
        <>
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <h2 className="mb-4">kSoccer Updates</h2>
            <Card className="mb-3">
                <Card.Header className="text-left">
                    <strong>Update 21/07/2020</strong>
                </Card.Header>
                <Card.Body className="text-left">
                    Hello
                </Card.Body>
            </Card>
            <Card className="mb-3">
                <Card.Header className="text-left">
                    <strong>Update 16/07/2020</strong>
                </Card.Header>
                <Card.Body className="text-left">
                    Hello2
                </Card.Body>
            </Card>
            </div>
        </>);
}
