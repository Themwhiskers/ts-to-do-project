import * as b from '../components/btnElements';

export const setOpen = () => b.settings.addEventListener('click', (e:Event) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    b.purge.classList.toggle('hidden');
    b.nightMode.classList.toggle('hidden');
    target.classList.toggle('grey-btn');
    target.classList.toggle('green-btn');
})