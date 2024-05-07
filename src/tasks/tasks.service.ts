import { Injectable, HttpCode, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

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

    private tasks = [];

    getTasks() {
        return this.tasks;
    }

    getTask(id: number) {
        const tareaEncontrada = this.tasks.find(task => task.id === id);
        
        if (!tareaEncontrada) {
            return new NotFoundException(`Tarea con id ${id} no encontrada`);
        }

        return tareaEncontrada;
    }

    createTask(task: CreateTaskDto) {
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        });
        return task;
    }

    updateTask(task: UpdateTaskDto) {
        console.log(task);
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