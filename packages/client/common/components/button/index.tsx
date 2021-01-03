import React, {ReactNode} from 'react';
import classNames from 'classnames';

type ButtonVariant = 'primary' | 'outline';

type Props = {
    onClick: () => void;
    label: string;
    className?: string;
    variant: ButtonVariant;
    disabled?: boolean;
};

function determineVariantClass(variant: ButtonVariant) {
    switch (variant) {
        case 'primary':
            return 'text-white button-gradient';
        case 'outline':
            return 'bg-transparent hover:bg-transparent dark:text-white';
        default:
            return '';
    }
}

export default function Button({onClick, label, className, disabled, variant}: Props) {
    return (
        <button
            disabled={disabled}
            className={classNames(
                'rounded focus:outline-black dark:focus:outline-white',
                determineVariantClass(variant),
                className,
            )}
            type="button"
            onClick={onClick}
        >
            {label}
        </button>
    );
}
