import React, { useState } from "react";
import { Button } from "react-bootstrap";
export type Holiday =
    | "Christmas"
    | "Easter"
    | "Halloween"
    | "Thanksgiving"
    | "Valentine's Day";

export function alphaHoliday(holiday: Holiday): Holiday {
    switch (holiday) {
        case "Christmas":
            return "Easter";
        case "Easter":
            return "Halloween";
        case "Halloween":
            return "Thanksgiving";
        case "Thanksgiving":
            return "Valentine's Day";
        case "Valentine's Day":
            return "Christmas";
    }
}

export function timeHoliday(holiday: Holiday): Holiday {
    switch (holiday) {
        case "Christmas":
            return "Valentine's Day";
        case "Easter":
            return "Halloween";
        case "Halloween":
            return "Thanksgiving";
        case "Thanksgiving":
            return "Christmas";
        case "Valentine's Day":
            return "Easter";
    }
}

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");
    return (
        <span>
            <Button
                onClick={() => {
                    setHoliday(alphaHoliday(holiday));
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(timeHoliday(holiday));
                }}
            >
                Advance by Year
            </Button>
            <span>
                Holiday:{" "}
                {holiday === "Christmas"
                    ? "\u{1F385}"
                    : holiday === "Valentine's Day"
                      ? "\u{1F48C}"
                      : holiday === "Easter"
                        ? "\u{1FABA}"
                        : holiday === "Thanksgiving"
                          ? "\u{1F983}"
                          : "\u{1F383}"}
            </span>
        </span>
    );
}
