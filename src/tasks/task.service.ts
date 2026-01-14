import { Injectable, NotFoundException } from '@nestjs/common';
import type { createTaskDto } from './dto/create-task-dto';
import { updateTaksDtp } from './dto/update-task-dto';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class TaskService {
  private tasks: any[] = [];

  getTasks() {
    return this.tasks;
  }
  getTask(id: number) {
    const res = this.tasks.find((task) => task.id === id);
    if (!res) {
      return new NotFoundException(`Task with id ${id} not found`);
    }
    return res;
  }

  createTask(task: createTaskDto) {
    this.tasks.push({ ...task, id: this.tasks.length + 1 });
    return task;
  }

  updateTask(task: updateTaksDtp) {
    return `Task updated `;
  }

  deleteTask() {
    return `Task deleted`;
  }

  partialUpdateTask() {
    return `Task partially updated`;
  }
}
