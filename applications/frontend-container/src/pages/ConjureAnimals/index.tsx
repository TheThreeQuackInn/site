import React, {useRef, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
// @ts-ignore
import {mount} from 'conjureanimals/App';
import Container from '@threequackinn/client-common/components/container';

export default function ConjureAnimalsApp() {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const {onParentNavigate} = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({pathname: nextPathname}: {pathname: string}) => {
                const {pathname} = history.location;
                if (pathname !== nextPathname) history.push(nextPathname);
            },
        });
        history.listen(onParentNavigate);
    }, []);

    return <Container ref={ref} />;
}
