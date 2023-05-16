import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticleViewSelector.module.scss';

import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/asserts/icons/list-24-24.svg';
import TiledIcon from '@/shared/asserts/icons/tiled-24-24.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui';
import { ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.GRID,
        icon: TiledIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];

const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { t } = useTranslation();
    const { className, view, onViewClick } = props;
    const onClick = (view: ArticleView) => () => {
        onViewClick?.(view);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    onClick={onClick(viewType.view)}
                    theme={ButtonTheme.CLEAR}
                    key={viewType.view}
                >
                    <Icon
                        className={classNames('', {
                            [cls.notSelected]: viewType.view !== view,
                        })}
                        width={24}
                        height={24}
                        Svg={viewType.icon}
                    />
                </Button>
            ))}
        </div>
    );
});

export { ArticleViewSelector };
