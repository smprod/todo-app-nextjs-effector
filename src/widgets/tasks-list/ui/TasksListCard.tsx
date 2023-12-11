import { taskModel } from "@entities/task";
import {useList, useUnit} from "effector-react";
import {Box, Checkbox, Flex, Stack, Text} from "@chakra-ui/react";

export const TasksListCard = () => {
    const tasksList = useList(taskModel.atoms.$filteredTasks, ({ id, title, completed }, index) => (
        <Flex
            width="30vw"
            align="center"
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="sm"
        >
            <Box flex="0.5">
                <Text fontWeight="semibold">{id}</Text>
            </Box>
            <Box flex="3">
                <Text>{title}</Text>
            </Box>
            <Box flex="0.5">
                <Checkbox
                    isChecked={completed}
                    colorScheme="teal"
                    onChange={(e) => taskModel.atoms.toggleCompleted([id, e.target.checked])}
                >
                    Completed
                </Checkbox>
            </Box>
        </Flex>
    ));
    return (
        <>
            <Stack mb="1vh" spacing={4}>{tasksList}</Stack>
        </>
    );
}