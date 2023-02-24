import {
    ReactNode, useEffect, useState, useRef,
} from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode,
  elem?: HTMLElement,
  // keepMounted?: boolean
}

const Portal = (props: PortalProps) => {
    const {
        children,
        elem = document.body,
        // keepMounted,
    } = props;
    // const [container] = useState(() => document.createElement('div'));

    // useEffect(() => {
    //     document.body.appendChild(container);
    //     if (!keepMounted) {
    //         document.body.removeChild(container);
    //     }
    // }, [container, keepMounted]);
    // return createPortal(children, container);

    // const ref = useRef();
    // const [mounted, setMounted] = useState(false);

    // useEffect(() => {
    //     console.log('Portal отработал', document.querySelector('app'));
    //     ref.current = document.querySelector('#root') || undefined;
    //     setMounted(true);
    // }, []);

    // return mounted && ref.current ? createPortal(children, ref.current) : null;
    return createPortal(children, elem);
};

export { Portal };
