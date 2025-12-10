import { tasks } from "../data/tasks.js";

export function printAll() {
    let sorttasks = tasks.slice(0, tasks.length)
    sorttasks.sort((a,b)=>{
      a.dateCreate.getTime()-b.dateCreate.getTime()
    })
    sorttasks.reverse()
    console.log(sorttasks);
    
}

export function printAllold(){
     let sorttasks = tasks.slice(0, tasks.length)
    sorttasks.sort((a,b)=>{
      a.dateCreate.getTime()-b.dateCreate.getTime()
    })
    console.log(sorttasks);
}
