import { taskManager as tm, tasks } from './taskManeger';

export const btnfunc = () => document.body!.addEventListener('click', (e:Event) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    const selector = (c:string) => target.classList.contains(c);
    const lead = target.parentElement!.parentElement!;

    if (selector('comp-btn')) {
        tm.completeTask(lead.id);
        tm.saveTasks();
        tm.renderTask();
    }
    if (selector('delete-btn')) {
        tm.removeTask(lead.id);
        tm.saveTasks();
        tm.renderTask();
    }
    if (selector('edit-btn')) {
        document.querySelector(`#info-${lead.id}`)!.classList.toggle('hidden');
        document.querySelector(`#delete-${lead.id}`)!.classList.toggle('hidden');
        document.querySelector(`#edit-${lead.id}`)!.classList.toggle('hidden');
        document.querySelector(`#comp-${lead.id}`)!.classList.toggle('hidden');
        document.querySelector(`#create-date-${lead.id}`)!.classList.toggle('hidden');
        document.querySelector(`#edit-prompt-${lead.id}`)!.classList.toggle('hidden');
    }
    if (selector('edit-save')) {
        tm.editTask(lead.id);
        tm.saveTasks();
        tm.renderTask(); 
    }
    if (selector('purge')) {
        tm.renderPurge();
    }
    if (selector('purge-exit')) {
        tm.unrenderPurge();
    }
    if (selector('purge-confirm')) {
        tm.purgeTasks();
        tm.saveTasks();
        tm.renderTask();
        tm.unrenderPurge();
    }
});