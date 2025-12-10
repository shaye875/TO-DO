import { tasks } from "../data/tasks.js";

export function createtTask(name,task,status){
   return {
    id:tasks.length+1,
    name:name,
    dateCreate:new Date,
    task:task,
    status:status
   }
}