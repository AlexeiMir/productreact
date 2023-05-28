import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticleViewSelector.module.scss';

import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/asserts/icons/burger.svg';
import ListIconDeprecated from '@/shared/asserts/icons/list-24-24.svg';
import TiledIcon from '@/shared/asserts/icons/tile.svg';
import TiledIconDeprecated from '@/shared/asserts/icons/tiled-24-24.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { getHStack } from '@/shared/ui/redesigned/Card/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.GRID,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            off: () => TiledIconDeprecated,
            on: () => TiledIcon,
        }),
    },
    {
        view: ArticleView.LIST,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            off: () => ListIconDeprecated,
            on: () => ListIcon,
        }),
    },
];

const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { t } = useTranslation();
    const { className, view, onViewClick } = props;
    const onClick = (view: ArticleView) => () => {
        onViewClick?.(view);
    };

    const flexClasses = getHStack({ gap: '16', justify: 'center' });

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <div
                    className={classNames(cls.ArticleViewSelector, {}, [
                        className,
                    ])}
                >
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            onClick={onClick(viewType.view)}
                            theme={ButtonTheme.CLEAR}
                            key={viewType.view}
                        >
                            <IconDeprecated
                                className={classNames('', {
                                    [cls.notSelected]: viewType.view !== view,
                                })}
                                width={24}
                                height={24}
                                Svg={viewType.icon}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
            on={
                <Card
                    border="round"
                    className={classNames(
                        cls.ArticleViewSelectorRedesigned,
                        {},
                        [className, ...flexClasses],
                    )}
                >
                    {viewTypes.map((viewType) => (
                        <Icon
                            className={classNames('', {
                                [cls.notSelected]: viewType.view !== view,
                            })}
                            width={24}
                            height={24}
                            Svg={viewType.icon}
                            onClick={onClick(viewType.view)}
                            clickable
                        />
                    ))}
                </Card>
            }
        />
    );
});

export { ArticleViewSelector };
