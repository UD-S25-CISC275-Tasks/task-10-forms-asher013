import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function toggleEditMode(e: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(e.target.checked);
    }
    function toggleStudent(e: React.ChangeEvent<HTMLInputElement>) {
        setStudent(e.target.checked);
    }
    function updateName(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-check"
                label="Edit"
                checked={editMode}
                onChange={toggleEditMode}
            />
            <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    type="text"
                    value={
                        editMode ? name
                        : student ?
                            name + " is a student"
                        :   name + " is not a student"
                    }
                    onChange={updateName}
                    disabled={!editMode}
                />
            </Form.Group>
            <Form.Check
                type="checkbox"
                id="is-student-check"
                label="Student"
                checked={student}
                onChange={toggleStudent}
            />
        </div>
    );
}
