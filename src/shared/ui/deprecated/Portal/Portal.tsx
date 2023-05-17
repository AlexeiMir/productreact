import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    elem?: HTMLElement;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const Portal = (props: PortalProps) => {
    const { children, elem = document.body } = props;

    return createPortal(children, elem);
};

export { Portal };
