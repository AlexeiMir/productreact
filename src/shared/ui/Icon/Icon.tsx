import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';

import cls from './Icon.module.scss';

interface IconProps {
  className?: string,
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean
}

const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        inverted,
    } = props;
    return <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />;
});

export { Icon };
