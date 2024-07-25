import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    text: string;
    children: ReactNode | ReactNode[];
}

const DefinationItem = ({ text, children }: Props) => (
    <Box marginY={5}>
        <Heading as={"dt"} fontSize={'md'} color={'gray.600'}>{text}</Heading>
        <dd>{children}</dd>
    </Box>
);

export default DefinationItem;
