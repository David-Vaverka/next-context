'use client';

import { useState } from 'react';
import {useThemeContext} from "../pages/theme";

export default function Counter() {
    const [count, setCount] = useState(0);


    // @ts-ignore
    const [theme, setTheme] = useThemeContext();

    return (
        <div>
            theme: {theme}
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>

            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>
    );
}
