import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode,
  // elem?: HTMLElement,
  keepMounted?: boolean
}

const Portal = (props: PortalProps) => {
    const {
        children,
        // elem = document.body,
        keepMounted,
    } = props;
    const [container] = useState(() => document.createElement('div'));

    useEffect(() => {
        document.body.appendChild(container);
        if (!keepMounted) {
            document.body.removeChild(container);
        }
    }, [container, keepMounted]);
    return createPortal(children, container);
};

export { Portal };
