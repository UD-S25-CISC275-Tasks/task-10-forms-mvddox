import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditing(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-editing-check"
                    label="Editing?"
                    checked={editMode}
                    onChange={updateEditing}
                />
            </div>
            {editMode && (
                <div>
                    <Form.Group controlId="formAnswer">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={username} onChange={updateName} />
                    </Form.Group>
                </div>
            )}
            {editMode && (
                <div>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                </div>
            )}
            {!editMode && (
                <div>
                    {username} is {isStudent ? "a student" : "not a student"}
                </div>
            )}
        </div>
    );
}
