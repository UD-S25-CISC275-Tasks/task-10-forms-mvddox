import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="choices">
                    <Form.Label>Select a choice</Form.Label>
                    <Form.Select value={choice} onChange={updateChoice}>
                        {options.map((currChoice: string) => (
                            <option key={currChoice} value={currChoice}>
                                {currChoice}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <div>{expectedAnswer === choice ? "✔️" : "❌"}</div>
        </div>
    );
}
