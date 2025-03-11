import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const addAttempt = 0;
    return (
        <div>
            <Form.Group controlId="formAttempts">
                <Form.Label>Attempts Requested:</Form.Label>
                <Form.Control
                    type="number"
                    value={addAttempt}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setAttempts(parseInt(event.target.value));
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(attempts + addAttempt);
                }}
            >
                Give Attempt
            </Button>
            <span>Attempts remaining: {attempts}</span>
        </div>
    );
}
