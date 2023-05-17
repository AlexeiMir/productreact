import { Flex, FlexProps, TagsVariants } from '../Flex/Flex';

type HStackProps = Omit<FlexProps<TagsVariants>, 'direction'>;
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const HStack = (props: HStackProps) => {
    return <Flex direction="row" {...props} />;
};

export { HStack };
