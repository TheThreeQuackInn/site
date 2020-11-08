import React, {ReactNode, Ref, forwardRef} from 'react';
import classNames from 'classnames';

type Props = {
    title: string;
    children: ReactNode;
    className?: string;
    innerRef?: Ref<HTMLDivElement>;
};

function CardInner({title, children, className, innerRef}: Props) {
    return (
        <div
            ref={innerRef}
            className={classNames(['rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden', className])}
        >
            <div className="px-3 pt-2 pb-3 md:p-5 relative box-border w-full">
                <h4 className="font-bold text-xl mb-2">{title}</h4>
                {children}
            </div>
        </div>
    );
}

const Card = forwardRef((props: Props, ref: Ref<HTMLDivElement>) => <CardInner {...props} innerRef={ref} />);
export default Card;
