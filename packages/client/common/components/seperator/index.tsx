import React from 'react';
import classNames from 'classnames';

const defaultClassName = 'h-1 button-gradient';

type Props = {
    className?: string;
};

export default function Separator({className}: Props) {
    return <div className={classNames(defaultClassName, className)} />;
}
