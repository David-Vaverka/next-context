'use client';

import { useState } from 'react';
import {useThemeContext} from "../pages/theme";

export default function Counter() {
    const [count, setCount] = useState(0);


    // @ts-ignore
    const [theme, setTheme] = useThemeContext();


    function onClick() {
        setCount(count + 1)

        setTheme(count)
    }

    return (
        <div>
            theme: {theme}
            <p>You clicked {count} times</p>
            <button onClick={() => onClick()}>Click me</button>
        </div>
    );
}
