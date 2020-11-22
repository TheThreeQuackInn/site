import React, {useEffect, useState, ReactNode} from 'react';
import classNames from 'classnames';

type Props = {
    value?: 0 | 1;
    onClick?: () => void;
    label: string;
    left?: ReactNode;
    right?: ReactNode;
};

export default function Toggle({value = 0, onClick, left, right, label}: Props) {
    const [val, setVal] = useState(value);

    function handleOnSetValue() {
        const value = val === 0 ? 1 : 0;
        setVal(value);

        onClick && onClick();
    }

    useEffect(() => setVal(value), [value]);

    return (
        <div className="inline-flex justify-center items-center">
            {left}
            <div
                className={classNames(
                    'relative rounded-full w-12 h-6 transition duration-200 ease-linear',
                    val === 0 ? 'bg-gray-200' : 'bg-gray-500',
                )}
            >
                <label
                    htmlFor="toggle"
                    className={classNames(
                        'absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer',
                        val === 0 ? 'translate-x-0 border-gray-200' : 'translate-x-full border-gray-500',
                    )}
                >
                    <span className="sr-only">{label}</span>
                </label>
                <input
                    type="checkbox"
                    id="toggle"
                    name="toggle"
                    className="appearance-none w-full h-full active:outline-none focus:outline-none"
                    onClick={handleOnSetValue}
                />
            </div>
            {right}
        </div>
    );
}
