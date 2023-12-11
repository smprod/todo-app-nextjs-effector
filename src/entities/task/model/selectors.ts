import {useUnit} from "effector-react";
import { $tasks } from "./atoms";
import {combine} from "effector";

export const useTask = () => {
    return useUnit($tasks);
};