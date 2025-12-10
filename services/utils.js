import { tasks } from "../data/tasks.js";

export function addTask(task){
if (typeof task === 'object'){
    tasks.push(task)
}
}