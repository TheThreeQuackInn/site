import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {getThemePreference} from '../../ThemeSwitch';

export const ThemeContext = createContext<{theme: string | null; setTheme: (theme: string) => void}>({
    theme: null,
    setTheme: (theme: string) => {
        //resolve
    },
});

type Props = {
    children: ReactNode;
};

export default function ThemeProvider({children}: Props) {
    const [theme, setTheme] = useState<string | null>(null);

    function handleSetTheme(theme: string) {
        setTheme(theme);
    }

    /**
     * Necessary to match initial server render with client-side rendered output
     */
    useEffect(() => {
        setTheme(getThemePreference());
    }, []);

    return <ThemeContext.Provider value={{theme, setTheme: handleSetTheme}}>{children}</ThemeContext.Provider>;
}
