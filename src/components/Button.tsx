import React from "react";
import { useState } from "react";

export function Button() {
    const [i, setI] = useState(0);

    return <button onClick={() => {
        setI(i + 1);
    }}>Press: {i}</button>
}