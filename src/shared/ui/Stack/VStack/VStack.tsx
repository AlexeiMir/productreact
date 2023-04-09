import { Flex, FlexProps, TagsVariants } from '../Flex/Flex';

type VStackProps = Omit<FlexProps<TagsVariants>, 'direction'>

const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return (
        <Flex {...props} direction="column" align={align} />
    );
};

export { VStack };
