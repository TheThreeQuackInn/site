import React, {ReactNode} from 'react';
import classNames from 'classnames';

type Props = {
    children: ReactNode;
    className?: string;
};

export default function Container({children, className}: Props) {
    return <div className={classNames('container mx-auto flex', className)}>{children}</div>;
}
