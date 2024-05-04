import { Injectable } from "@nestjs/common";

export interface Usuario {
    nombre: string;
    desarrolladorWeb: boolean;
    añosExp: number;
}

@Injectable()
export class TasksService {
    static getTasks: any;
    /* static getTasks() {
        throw new Error("Method not implemented.");
    } */

    getTasks(): Usuario {
        return {
            nombre: 'Jere',
            desarrolladorWeb: true,
            añosExp: 2
        }
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