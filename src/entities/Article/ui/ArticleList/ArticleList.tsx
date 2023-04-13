import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { HTMLAttributeAnchorTarget, memo } from 'react';

import { Text, TextSize } from 'shared/ui/Text/Text';
import {
    List,
    WindowScroller,
    ListRowProps,
} from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/ui/Page';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleView } from '../../model/consts/articleConsts';

interface ArticleListProps {
  className?: string,
  articles: Article[],
  isLoading?: boolean,
  view?: ArticleView,
  target?: HTMLAttributeAnchorTarget,
  virtualized?: boolean
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.GRID ? 9 : 3).fill(0).map((item, index) => (
    <ArticleListItemSkeleton
        className={cls.card}
        key={index}
        view={view}
    />
));

const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        target,
        virtualized = true,
        view = ArticleView.GRID,
    } = props;
    const { t } = useTranslation();

    const isBig = view === ArticleView.LIST;

    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRenderer = ({
        index, isScrolling, isVisible, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    key={articles[i].id}
                    article={articles[i]}
                    view={view}
                    className={cls.card}
                    target={target}
                />,
            );
        }

        return (
            <div
                key={key}
                className={cls.row}
                style={style}
            >
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
    // @ts-ignore
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >

            {({
                width,
                height,
                registerChild,
                onChildScroll,
                isScrolling,
                scrollTop,

            }) => (
                <div
                    // @ts-ignore
                    ref={registerChild}
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                >
                    {virtualized
                        ? (
                    // @ts-ignore
                            <List
                                height={height ?? 700}
                                width={width ? width - 80 : 700}
                                rowCount={rowCount}
                                rowHeight={isBig ? 700 : 330}
                                rowRenderer={rowRenderer}
                                // autoContainerWidth
                                // autoWidth
                                autoHeight
                                onScroll={onChildScroll}
                                isScrolling={isScrolling}
                                scrollTop={scrollTop}
                            />
                        )
                        : articles.map((article) => (
                            <ArticleListItem
                                key={article.id}
                                article={article}
                                view={view}
                                className={cls.card}
                                target={target}
                            />
                        ))}
                    {isLoading && getSkeletons(view)}
                </div>
            )}

        </WindowScroller>
    );
});

export { ArticleList };
