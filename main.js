import { createtTask } from "./services/create.js";
import { printAll,printAllByStatus,printAllold } from "./services/sort.js";
import { addTask,showByName,editTaks,delTsak } from "./services/utils.js";
import readLineSync from "readline-sync"

function main(){
    let flag = true
    while(flag){
        console.log("1.add task");
        console.log("2.show all");
        console.log("3.show by status");
        console.log("4.show by old");
        console.log("5.show by name");
        console.log("6.edit task");
        console.log("7.remove task");
        console.log("0.exit");
        const choish = Number(readLineSync.question())
        switch(choish){
            case 1:
                const name = readLineSync.question("enter name: ")
                const task = readLineSync.question("write task: ")
                const status = readLineSync.question("write status(new,work,done)")
                const obj = createtTask(name,task,status)
                addTask(obj)
                break
            case 2:              
                printAll()
                break
            case 3:
                printAllByStatus()
                break
            case 4:
                printAllold()
                break
            case 5:
                showByName()
                break
            case 6:
                editTaks()
                break
            case 7:
                delTsak()
                break
            case 0:
                flag = false
                break
        }
    }
}
main()