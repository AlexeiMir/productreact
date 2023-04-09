import { Flex, FlexProps, TagsVariants } from '../Flex/Flex';

type HStackProps = Omit<FlexProps<TagsVariants>, 'direction'>

const HStack = (props: HStackProps) => {
    return (
        <Flex direction="row" {...props} />
    );
};

export { HStack };
