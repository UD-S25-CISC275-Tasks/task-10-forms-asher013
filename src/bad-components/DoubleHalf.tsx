import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleHalfState {
    setDhValue: (dhValue: number) => void;
    dhValue: number;
}

function Doubler({ setDhValue, dhValue }: DoubleHalfState): React.JSX.Element {
    //const [dhValue, setDhValue] = useState<number>(1);
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver({ setDhValue, dhValue }: DoubleHalfState): React.JSX.Element {
    //const [dhValue, setDhValue] = useState<number>(1);
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
            <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>
        </div>
    );
}
