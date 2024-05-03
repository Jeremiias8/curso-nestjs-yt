import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService {
    static getTasks: any;
    /* static getTasks() {
        throw new Error("Method not implemented.");
    } */

    getTasks() {
        return ['Task 1', 'Task 2', 'Task 3']
    }

    createTask() {
        return 'Creando tareas'
    }

    updateTask() {
        return 'Actualizando tareas'
    }

    deleteTask() {
        return 'Eliminando tareas'
    }

    updateTaskStatus() {
        return 'Actualizando el estado de una tarea'
    }

    testing() {
        return ['', '', '']
    }
}