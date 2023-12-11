import { taskApi } from "@shared/api";
import {combine, createEffect, createEvent, createStore} from "effector";
import { normalize, schema } from "normalizr";
import { Task } from "./types";

export const getTasksListFx = createEffect((limit: number) => taskApi.getTasksList(limit));
export const toggleCompleted = createEvent<[number, boolean]>()
const $tasks = createStore<Task[]>([])
    .on(getTasksListFx.doneData, (_, payload) => payload.data)
    .on(toggleCompleted, (tasks, [id, completed]) => {
        return tasks.map(task => task.id === id ? {...task, completed} : task)
    })
export const setFilter = createEvent<string>();
export const $filters = createStore('all').on(setFilter, (_, newFilter) => newFilter);

export const $filteredTasks = combine($tasks, $filters, (tasks, filter) => {
    if (filter === 'all') return tasks;
    if (filter === 'completed') return tasks.filter(task => task.completed);
    if (filter === 'notCompleted') return tasks.filter(task => !task.completed);
    return tasks;
});