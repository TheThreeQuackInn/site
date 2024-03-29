import React, {ReactNode} from 'react';
import classNames from 'classnames';

type Props = {
    title: string;
    children: ReactNode;
    className?: string;
    subTitle?: string | ReactNode;
};

export default function Card({title, children, className, subTitle}: Props) {
    return (
        <div
            className={classNames([
                'rounded-lg bg-white dark:bg-gray-800 shadow-lg md:shadow-xl relative overflow-hidden',
                className,
            ])}
        >
            <div className="px-3 pt-2 pb-3 md:p-5 relative box-border w-full">
                <p className="font-bold text-xl mb-2 dark:text-white">
                    {title}
                    {subTitle ? subTitle : null}
                </p>
                <div className="dark:text-white text-gray-700">{children}</div>
            </div>
        </div>
    );
}
