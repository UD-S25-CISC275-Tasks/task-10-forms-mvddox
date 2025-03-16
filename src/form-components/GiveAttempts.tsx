import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [reqAttempts, setReqAttempts] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Remaining: {attempts}</div>
            <Form.Group controlId="formReqAttempts">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setReqAttempts(parseInt(event.target.value) || 0);
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={!attempts}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + reqAttempts);
                }}
            >
                gain
            </Button>
        </div>
    );
}
