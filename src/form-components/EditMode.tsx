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
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-check"
                label="Edit"
                checked={editMode}
                onChange={toggleEditMode}
            />
            {editMode ?
                <div>
                    <Form.Check
                        type="checkbox"
                        id="student-check"
                        label="Student"
                        checked={student}
                        onChange={toggleStudent}
                    />
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                </div>
            :   <span>
                    {student ?
                        <div>{name} is a student</div>
                    :   <div>{name} is not a student</div>}
                </span>
            }
        </div>
    );
    /*<div>
            <Form.Switch
                type="switch"
                id="edit-check"
                label="Edit"
                checked={editMode}
                onChange={toggleEditMode}
            />
            <span>
                <div>
                    <Form.Check
                        type="switch"
                        id="is-student-check"
                        label="Student"
                        checked={student}
                        onChange={toggleStudent}
                    />
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
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
                </div>
            </span>
        </div>
    );
    */
}
