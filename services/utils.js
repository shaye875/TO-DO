import { tasks } from "../data/tasks.js";
import readLineSync from "readline-sync"

export function addTask(task) {
    if (typeof task === 'object') {
        tasks.push(task)
    }
}

export function showByName() {
    const name = readLineSync.question("which name: ")
    for (let p of tasks) {
        if (p.name.toLowerCase() === name.toLowerCase()) {
            for (let key in p) {
                console.log(key, p[key]);
                return
            }
        }
    }
}

export function editTaks() {
    let id = readLineSync.question("which id: ")
    for (let t of tasks) {
        if (Number(id) === Number(t.id)) {
            let num = readLineSync.question("hou many keys: ")
            for (let i = 1; i <= num; i++) {
                let key = readLineSync.question("which key: ")
                let value = readLineSync.question("enter value: ")
                t[key] = value
            }
        }
    }
}
