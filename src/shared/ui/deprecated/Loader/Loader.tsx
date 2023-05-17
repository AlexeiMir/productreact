import cls from './Loader.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
    className?: string;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(cls['lds-ellipsis'], {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);

export { Loader };
