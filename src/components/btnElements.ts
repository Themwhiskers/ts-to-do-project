import * as i from './iconElements';

export const addPrompt = document.createElement('button');
addPrompt.setAttribute('id', 'addPrompt');
addPrompt.innerText = `${i.submit}`;
addPrompt.setAttribute('title', 'Add Task');

export const clearPrompt = document.createElement('button');
clearPrompt.setAttribute('id', 'clearPrompt');
clearPrompt.innerText = `${i.trash}`;
clearPrompt.setAttribute('title', 'Clear prompt line and write a new task');


//purge window:

export const purgeConfirm = document.createElement('button');
purgeConfirm.setAttribute('id', 'purgeConfirm');
purgeConfirm.setAttribute('class', `purge-confirm`);
purgeConfirm.setAttribute('title', 'Permenantly delete all tasks');
purgeConfirm.innerText = `${i.burn}`;

export const purgeExit = document.createElement('button');
purgeExit.setAttribute('id', 'purgeExit');
purgeExit.setAttribute('class', `purge-exit`);
purgeExit.setAttribute('title', 'Exit to Task Maneger');
purgeExit.innerText = `${i.leave}`;

//settings:

export const settings = document.createElement('button');
settings.setAttribute('id','settings');
settings.setAttribute('class','grey-btn');
settings.setAttribute('title','Open "Settings" menu');
settings.innerText = `${i.config}`;

export const purge = document.createElement('button');
purge.setAttribute('id', 'purge');
purge.setAttribute('class', `purge hidden`);
purge.setAttribute('title','Purge all tasks');
purge.innerText = `${i.burn}`;

export const nightMode = document.createElement('button');
nightMode.setAttribute('id','nightMode');
nightMode.setAttribute('class','night hidden');
nightMode.setAttribute('title','Toggle between regular display & "Night Mode"');
nightMode.innerText = `${i.night}`;
