import cls from './Loader.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
    className?: string;
}

const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(cls['lds-ellipsis'], {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);

export { Loader };
