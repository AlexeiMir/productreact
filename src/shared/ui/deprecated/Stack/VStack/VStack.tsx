import { Flex, FlexProps, TagsVariants } from '../Flex/Flex';

type VStackProps = Omit<FlexProps<TagsVariants>, 'direction'>;
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return <Flex {...props} direction="column" align={align} />;
};

export { VStack };
