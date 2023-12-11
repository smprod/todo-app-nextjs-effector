import { taskModel } from "@entities/task";
import { TasksListCard } from "@widgets/tasks-list";
import {useEffect, useState} from "react";
import {Flex, Heading, Stack, Input, FormControl, FormLabel, FormHelperText, Box, Button} from "@chakra-ui/react";
import {useUnit} from "effector-react";

export const TasksListPage = () => {
    const [limit, setLimit] = useState(10)
    const filter = useUnit(taskModel.atoms.$filters);
    const isAllFilter = filter === 'all';
    const isCompletedFilter = filter === 'completed';
    const isNotCompletedFilter = filter === 'notCompleted';
    useEffect(() => {
        taskModel.atoms.getTasksListFx(limit)
    }, [limit]);
    return (
        <Flex
            direction="column"
            justify="center"
            align="center"
        >
            <Stack spacing="4" justify="center" align="center">
                <Heading textAlign="center">Tasks List</Heading>
                <FormControl width="xs">
                    <FormLabel>Number of tasks</FormLabel>
                    <Input placeholder="Enter the number of tasks" type='number' onChange={((e) => setLimit(parseInt(e.target.value)))} />
                </FormControl>
                <Box>
                    <Stack direction="row">
                        <Button onClick={() => taskModel.atoms.setFilter('all')} colorScheme="teal" variant={isAllFilter ? "solid" : "outline"}>
                            All
                        </Button>
                        <Button onClick={() => taskModel.atoms.setFilter('completed')} colorScheme="teal" variant={isCompletedFilter ? "solid" : "outline"}>
                            Completed
                        </Button>
                        <Button onClick={() => taskModel.atoms.setFilter('notCompleted')} colorScheme="teal" variant={isNotCompletedFilter ? "solid" : "outline"}>
                            Not Completed
                        </Button>
                    </Stack>
                </Box>
                <TasksListCard/>
            </Stack>
        </Flex>
    )
}