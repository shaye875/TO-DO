import { tasks } from "../data/tasks.js";

export function createtTask(dateCreate,task,status){
   return {
    id:tasks.length+1,
    dateCreate:dateCreate,
    task:task,
    status:status
   }
}