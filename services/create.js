import { tasks } from "../data/tasks.js";

export function createtTask(name,dateCreate,task,status){
   return {
    id:tasks.length+1,
    name:name,
    dateCreate:dateCreate,
    task:task,
    status:status
   }
}