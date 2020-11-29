import React, {SelectHTMLAttributes} from 'react';
import ChevronDownIcon from '../icons/ChevronDown';

type Props = {
    label: string;
    name: string;
    options: Array<{value: string; label: string}>;
    onChange: SelectHTMLAttributes<HTMLSelectElement>['onChange'];
    value: string;
};

export default function Select(props: Props) {
    const {label, name, options, onChange, value} = props;

    return (
        <div className="w-full">
            <label
                className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-1"
                htmlFor={name}
            >
                {label}
            </label>
            <div className="relative">
                <select
                    className="block appearance-none w-full bg-gray-200 dark:bg-gray-500 text-gray-700 dark:text-white py-2 px-2 md:px-3 md:py-2 focus:outline-black dark:focus:outline-white rounded leading-tight focus:border-gray-500"
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    tabIndex={0}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value} data-name={option.label}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-white">
                    <ChevronDownIcon />
                </div>
            </div>
        </div>
    );
}
