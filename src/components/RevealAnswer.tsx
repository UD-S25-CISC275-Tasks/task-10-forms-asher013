import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const text = "42";

    return (
        <span>
            <Button
                onClick={() => {
                    setShowAnswer(!showAnswer);
                }}
            >
                Reveal Answer
            </Button>
            {showAnswer ? (
                <span> The answer is {text}.</span>
            ) : (
                <span> Click the button to reveal the answer.</span>
            )}
        </span>
    );
}
