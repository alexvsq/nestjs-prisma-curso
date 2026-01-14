import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { createTaskDto } from './dto/create-task-dto';
import type { updateTaksDtp } from './dto/update-task-dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
  @ApiTags('Tasks')
export class TasksController {
  taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  @ApiOperation({ summary: 'Get all tasks' })
  @Get()
  getAllTasks(@Query() query: any) {
    console.log('Query Params:', query);
    return this.taskService.getTasks();
  }


  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTask(parseInt(id));
  }

    @ApiOperation({ summary: 'Create a task' })
  @Post()
  createTask(@Body() task: createTaskDto) {
    console.log('Creating task:', task);
    return this.taskService.createTask(task);
  }

  
  @Put()
  updateTask(@Body() task: updateTaksDtp) {
    return this.taskService.updateTask(task);
  }

  
  @Delete()
  deleteTask() {
    return this.taskService.deleteTask();
  }

  
  @Patch()
  partialUpdateTask() {
    return this.taskService.partialUpdateTask();
  }
}
