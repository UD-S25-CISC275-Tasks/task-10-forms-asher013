import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [newAttempts, setNewAttempts] = useState<number>(0);
    function addAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        setNewAttempts(
            !isNaN(parseInt(event.target.value)) ?
                parseInt(event.target.value)
            :   0,
        );
    }
    return (
        <div>
            <Form.Group controlId="formAttempts">
                <Form.Label>Attempts Requested:</Form.Label>
                <Form.Control
                    type="number"
                    value={newAttempts}
                    onChange={addAttempts}
                />
            </Form.Group>
            <Button
                type="button"
                onClick={() => {
                    setAttempts(attempts + newAttempts);
                }}
            >
                Gain
            </Button>
            <Button
                type="button"
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                Use
            </Button>
            <span>Attempts remaining: {attempts}</span>
        </div>
    );
}
