import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksService } from "./tasks.service";


@Controller({})
export class TasksController {
    tasksService: TasksService;

    constructor(tasksService: TasksService) {
        this.tasksService = tasksService;
    }

    // en ruta GET, retornará la function
    @Get('/tasks')
    getAllTasks() {

        return this.tasksService.getTasks();

        // petición a back o API
        let req = fetch('/reqres.com/users/page=1', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    @Post('/tasks')
    createTask() {
        return 'Creador de tareas'
    }

    @Put('/tasks')
    updateTask() {
        return 'Actualizador de tareas'
    }

    @Delete('/tasks')
    deleteTask() {
        return 'Borrador de tareas'
    }

    @Patch('/tasks') // {title: 'hey', status: true} => {status: false}
    updateTaskStatus() {
        return 'Modificando el estado de una tarea'
    }

    @Get('/')
    index() {
        return 'Página inicial'
    }
} 