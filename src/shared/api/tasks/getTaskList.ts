import axios from "axios";
import {api} from "@shared/api";

export const getTasksList = (limit: number) => {
    return api.get("/todos", { params: {_limit: limit} })
}