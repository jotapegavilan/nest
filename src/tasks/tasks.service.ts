/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {

    private taskList : Task[] = [
        {
            id : '1',
            title : 'first task',
            description : 'some task',
            status: TaskStatus.PENDING
        },
        {
            id : '2',
            title : 'second task',
            description : 'some task',
            status : TaskStatus.IN_PROGRESS
        },
    ];
    
    getAllTasks():Task[]{
        return this.taskList;
    }

    getTask(id:string):Task{
        return this.taskList.find(t=>t.id === id);
    }
    
    createTask(title:string, description:string):Task{
        const task : Task = {
            id : v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }        
        this.taskList.push(task);
        return task;
    }

    updateTask(id:string, campos:UpdateTaskDto){
        const task = this.getTask(id);
        const updateTask = Object.assign(task, campos);
        this.taskList.map(task => task.id === id ? updateTask : task);
        return this.taskList;
    }

    deleteTask(id:string):Task{
        const task = this.taskList.find(t => t.id === id)
        this.taskList = this.taskList.filter(t => t.id!==id)
        return task;
    }

}
