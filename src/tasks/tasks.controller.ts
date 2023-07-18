/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private taskService:TasksService){}
  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  getTask(@Param('id')id:string) {
    return this.taskService.getTask(id);
  }

  @Post()
  createTask(@Body() newTask:CreateTaskDto){
    return this.taskService.createTask(newTask.title,newTask.description);
  }

  @Delete(':id')
  deleteTask(@Param('id')id:string){
    return this.taskService.deleteTask(id);
  }

  @Patch(':id')
  updateTask(@Param('id')id:string, @Body() task:UpdateTaskDto){
    return this.taskService.updateTask(id, task);
  }

}
