import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    const colors = [
        "red",
        "green",
        "blue",
        "yellow",
        "purple",
        "orange",
        "pink",
        "brown",
    ];
    function updateColor(e: React.ChangeEvent<HTMLInputElement>) {
        setColor(e.target.value);
    }
    return (
        <div>
            {colors.map((currentColor: string) => (
                <label key={currentColor}>
                    <Form.Check
                        inline
                        style={{ backgroundColor: currentColor }}
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        label={currentColor}
                        value={currentColor}
                        checked={color === currentColor}
                    />
                </label>
            ))}
            <span>
                Current color is:
                <span
                    style={{ backgroundColor: color }}
                    data-testid="colored-box"
                >
                    {color}
                </span>
            </span>
        </div>
    );
}
