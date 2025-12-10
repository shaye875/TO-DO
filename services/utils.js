import { tasks } from "../data/tasks.js";
import readLineSync from "readline-sync"

export function addTask(task){
if (typeof task === 'object'){
    tasks.push(task)
}
}

export function showByName(){
    const name = readLineSync.question("which name: ")
    for (let p of tasks){
        if (p.name.toLowerCase() === name.toLowerCase()){
            for (let key in p){
                console.log(key,p[key]);
                return
            }
        }
    }
}