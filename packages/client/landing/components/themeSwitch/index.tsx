import React, {useEffect, useState} from 'react';
import Toggle from '@threequackinn/client-common/components/toggle';

enum Themes {
    Light = 'light',
    Dark = 'dark',
}

function getThemePreference() {
    if (typeof window === 'undefined') return null;

    const savedPreference: any = localStorage.getItem('theme');
    if (savedPreference && Object.values(Themes).includes(savedPreference)) return savedPreference;

    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkModePreference.media === 'not all') {
        return Themes.Light;
    }

    if (darkModePreference.matches) return Themes.Dark;
    return Themes.Light;
}

export default function ThemeSwitch() {
    const [theme, setTheme] = useState<'dark' | 'light' | null>(null);

    function handleOnClick() {
        const newTheme = theme === 'dark' ? Themes.Light : Themes.Dark;
        setNewTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    function setNewTheme(theme: 'dark' | 'light') {
        setTheme(theme);
        document.querySelector('html')?.setAttribute('class', theme);
    }

    function handleOnChange(e: MediaQueryListEvent) {
        const prefersDarkMode = e.matches;
        setNewTheme(prefersDarkMode ? Themes.Dark : Themes.Light);
    }

    useEffect(() => {
        const preferredTheme = getThemePreference();
        setNewTheme(preferredTheme);

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleOnChange, {passive: true});

        return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleOnChange);
    }, []);

    return theme ? (
        <Toggle
            value={theme === Themes.Dark ? 1 : 0}
            onClick={handleOnClick}
            label="Dark mode"
            left={
                <div className="mr-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        width="24"
                        height="24"
                        stroke={theme === Themes.Dark ? '#fff' : 'rgba(100, 116, 139, var(--tw-bg-opacity))'}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    </svg>
                </div>
            }
            right={
                <div className="ml-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        width="24"
                        height="24"
                        stroke={theme === Themes.Dark ? '#fff' : 'rgba(100, 116, 139, var(--tw-bg-opacity))'}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    </svg>
                </div>
            }
        />
    ) : null;
}
