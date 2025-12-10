import { tasks } from "../data/tasks.js";
import { nanoid } from 'nanoid'

export function createtTask(name,task,status){
   return {
    id:nanoid(),
    name:name,
    dateCreate:new Date(),
    task:task,
    status:status
   }
}