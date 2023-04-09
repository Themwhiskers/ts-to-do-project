import * as c from "../components/uiElements";
import * as b from "../components/btnElements";
import * as i from "../components/iconElements";
import { Status, Task } from '../types/types';
import * as icons from '../components/iconElements';

export let tasks:Task[] = [];

export class taskManager {
    
    static addTask(param:Task) {
        tasks.unshift(param);
    }

    static completeTask(param:Task['id']){
        const c = tasks.findIndex((f) =>  f.id === param);
        tasks[c].completed = Status.Done;
        tasks[c].completedAt = new Date();
    }

    static editTask(param:Task['id']){
        const e = tasks.findIndex((e) => e.id === param);
        const newInfo = document.getElementById(`edit-input-${param}`) as HTMLInputElement;
        if (newInfo.value !== '') tasks[e].info = newInfo.value;
    }

    static removeTask(param:Task['id']){
        tasks = tasks.filter(r => r.id !== param);
    }

    static saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static loadTasks(){
        let d = localStorage.getItem('tasks');
        let l = JSON.parse(d!) as Task[];
        if (l !== null) {
        l.forEach((t) => {
            t.completedAt = new Date(`${t.completedAt}`);
            t.createdAt = new Date(`${t.createdAt}`);
        })
        tasks = l;
        }
    }

    static purgeTasks() {
        tasks = [];
    }

    static renderPurge() {
        const purgeBlinds = document.createElement('div');
        purgeBlinds.setAttribute('id','purgeBlinds');
        const purgeWindow = document.createElement('div');
        purgeWindow.setAttribute('id', 'purgeWindow');
        const purgeWarnning = document.createElement('p');
        purgeWarnning.setAttribute('id','purgeWarnning');
        purgeWarnning.innerHTML += `<span class="alert">WARNNING:</span> <span class="msg">This action will permenantly delete all the tasks you have submited so far. Do you wish to continue?</span>`;
        purgeWindow.appendChild(purgeWarnning);
        purgeWindow.appendChild(b.purgeConfirm);
        b.purgeConfirm.innerText = `${i.burn}`;
        purgeWindow.appendChild(b.purgeExit);
        document.body.appendChild(purgeBlinds);
        document.body.appendChild(purgeWindow);
    }

    static unrenderPurge() {
        const removePurgeWindow = document.getElementById('purgeWindow');
        const removePurgeBlinds = document.getElementById('purgeBlinds');
        document.body.removeChild(removePurgeWindow!);
        document.body.removeChild(removePurgeBlinds!);
    }

    static renderTask() {
        c.newList!.innerHTML = '';
        c.comList!.innerHTML = '';

        tasks.forEach((t,i) => {
            const taskLi = document.createElement('li');
            taskLi.setAttribute('id', t.id);
            taskLi.dataset.taskStatus === `${t.completed}`;
            
            const taskInfo = document.createElement('p');
            taskInfo.setAttribute('id', `info-${t.id}`);
            taskInfo.innerText += t.info;
            taskLi.appendChild(taskInfo);

            const editPrompt = document.createElement('div');
            editPrompt.setAttribute('id', `edit-prompt-${t.id}`);
            editPrompt.setAttribute('class', 'edit-prompt hidden');
            const editInput = document.createElement('input');
            editInput.setAttribute('id',`edit-input-${t.id}`);
            editInput.placeholder = `${t.info}`;
            editPrompt.appendChild(editInput);
            const editSave = document.createElement('button');
            editSave.setAttribute('id', `edit-save-${t.id}`);
            editSave.setAttribute('class', `edit-save`);
            editSave.setAttribute('title', 'Save changes');
            editSave.innerText = `${icons.submit}`;
            editPrompt.appendChild(editSave);

            const taskBtnHousing = document.createElement('div');
            taskBtnHousing.setAttribute('id',`house-${t.id}`);
            taskBtnHousing.setAttribute('class','task-btns');

            const deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('id', `delete-${t.id}`);
            deleteBtn.setAttribute('class', `delete-btn`);
            deleteBtn.setAttribute('title', 'Delete task');
            deleteBtn.innerText = `${icons.trash}`;

            const editBtn = document.createElement('button');
            editBtn.setAttribute('id', `edit-${t.id}`);
            editBtn.setAttribute('class', `edit-btn`);
            editBtn.setAttribute('title', 'Edit task');
            editBtn.innerText = `${icons.rewrite}`;

            const compBtn = document.createElement('button');
            compBtn.setAttribute('id', `comp-${t.id}`);
            compBtn.setAttribute('class', `comp-btn`);
            compBtn.setAttribute('title', 'Mark task as "done"');
            compBtn.innerText = `${icons.checked}`;

            const CreatedAT = document.createElement('span');
            CreatedAT.setAttribute('id', `create-date-${t.id}`);
            CreatedAT.setAttribute('class', 'create-date');
            CreatedAT.innerText += `Submited at: ${t.createdAt.getDate()}.${t.createdAt.getMonth()+1}.${t.createdAt.getFullYear()} ${t.createdAt.getHours()}:${t.createdAt.getMinutes()}`;

            const CompletedAT = document.createElement('span');
            CompletedAT.setAttribute('id',`completed-date-${t.id}`);
            CompletedAT.setAttribute('class', 'completed-date');
            CompletedAT.innerText += `Completed: ${t.completedAt!.getDate()}.${t.completedAt!.getMonth()!+1}.${t.completedAt!.getFullYear()} ${t.completedAt!.getHours()}:${t.completedAt!.getMinutes()}`;

            taskLi.appendChild(taskBtnHousing);

            if (t.completed === 0) { 
                c.newList?.appendChild(taskLi);
                taskLi.appendChild(editPrompt);
                taskBtnHousing.appendChild(deleteBtn);
                taskBtnHousing.appendChild(compBtn);
                taskBtnHousing.appendChild(editBtn);
                taskLi.appendChild(CreatedAT);
                } else
                { c.comList?.appendChild(taskLi);
                taskLi.appendChild(CompletedAT);
            };
        })
    }
};