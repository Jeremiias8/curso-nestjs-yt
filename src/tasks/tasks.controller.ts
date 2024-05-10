import { 
    Controller, Delete, Get, Patch, Post, 
    Put, Body, Query, Param } 
from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";


@Controller('/tasks')
@ApiTags('tasks')
export class TasksController {
    
    constructor(private tasksService: TasksService) {}

    // en ruta GET, retornará la function
    @Get()
    @ApiOperation({ 
        summary: 'Obtener todas las tareas' 
    })
    @ApiResponse({
        status: 200,
        description: 'Retorno de todas las tareas.'
    })
    @ApiResponse({
        status: 403,
        description: 'Forbidden'
    })
    getAllTasks(@Query() query: any) {

        console.log(query);
        return this.tasksService.getTasks();

        // petición a back o API
        let req = fetch('/reqres.com/users/page=1', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    @Get('/:id')
    getTask(@Param('id') id: string) {
        console.log(id);
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    @ApiOperation({ summary: 'Crear una tarea' })
    createTask(@Body() task: CreateTaskDto) {
        console.log(task);
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: UpdateTaskDto) {
        return this.tasksService.updateTask(task);
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