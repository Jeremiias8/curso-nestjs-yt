import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksService } from "./tasks.service";


@Controller('/tasks')
export class TasksController {
    tasksService: TasksService;

    constructor(tasksService: TasksService) {
        this.tasksService = tasksService;
    }

    // en ruta GET, retornará la function
    @Get()
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

    @Post()
    createTask() {
        return this.tasksService.createTask();
    }

    @Put()
    updateTask() {
        return this.tasksService.updateTask();
    }

    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask();
    }

    @Patch() // {title: 'hey', status: true} => {status: false}
    updateTaskStatus() {
        return this.tasksService.updateTaskStatus();
    }

    @Get('/')
    index() {
        return 'Página inicial'
    }
} 