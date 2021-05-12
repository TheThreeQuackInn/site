import React, {ReactNode, forwardRef} from 'react';
import classNames from 'classnames';

type Props = {
    children?: ReactNode;
    className?: string;
};

export default forwardRef((props: Props, ref: any) => (
    <div ref={ref} className={classNames('container mx-auto flex dark:text-gray-100 text-gray-900', props.className)}>
        {props.children}
    </div>
));
