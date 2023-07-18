/* eslint-disable prettier/prettier */
export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
}

export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

