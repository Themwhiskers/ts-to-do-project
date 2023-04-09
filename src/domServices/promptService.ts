import { taskManager as tm } from './taskManeger';
import * as c from '../components/uiElements';
import * as b from '../components/btnElements';
import { v4 as v4 } from 'uuid';
import { Task } from '../types/types';

export const promptSender = () => b.addPrompt!.addEventListener('click', () => {
    if (c.inputPrompt?.value !== '') {
        const newTask: Task = {
            id: v4(),
            info: c.inputPrompt!.value,
            completed: 0,
            createdAt: new Date(),
            completedAt: new Date('0')
        }
        tm.addTask(newTask);
        tm.saveTasks();
        tm.renderTask();
        c.inputPrompt!.value = '';
    }
});

export const cleanUp = () => b.clearPrompt!.addEventListener('click', () => c.inputPrompt!.value = '');