import { tasks } from "../data/tasks.js";

export function printAll() {
    let sorttasks = tasks.slice(0, tasks.length)
    sorttasks.sort((a, b) => {
        a.dateCreate.getTime() - b.dateCreate.getTime()
    })
    sorttasks.reverse()
    console.table(sorttasks);

}

export function printAllold() {
    let sorttasks = tasks.slice(0, tasks.length)
    sorttasks.sort((a, b) => {
        a.dateCreate.getTime() - b.dateCreate.getTime()
    })
    console.table(sorttasks);
}

export function printAllByStatus() {
    let sorttasks = tasks.filter((p) => {
        if (p.status === "new") {
            return p
        }
    })
    tasks.forEach((p) => {
        if (p.status === "work") {
            sorttasks.push(p)
        }
    })
    tasks.forEach((p) => {
        if (p.status === "done") {
            sorttasks.push(p)
        }
    })
    console.table(sorttasks);
}
