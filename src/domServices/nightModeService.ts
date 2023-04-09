import * as c from '../components/uiElements';
import * as b from '../components/btnElements';
import * as i from '../components/iconElements';

export const switchTheme = () => b.nightMode.addEventListener('click', (e:Event) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    if (target.innerText === `${i.night}`) {
        c.body!.classList.remove('light-theme');
        c.body!.classList.add('dark-theme');
        target.innerText = `${i.sun}`;
        target.classList.remove('night');
        target.classList.add('sun');
        localStorage.setItem('theme', 'dark')
    } else {
        c.body!.classList.remove ('dark-theme');
        c.body!.classList.add('light-theme');
        target.innerText = `${i.night}`;
        target.classList.remove('sun');
        target.classList.add('night');
        localStorage.setItem('theme','light');
    }
});

export const setTheme = () => {
    const themePref = localStorage.getItem('theme');
    if (themePref === 'dark') {
        c.body!.classList.remove('light-theme');
        c.body!.classList.add('dark-theme');
        b.nightMode.innerText = `${i.sun}`;
        b.nightMode.classList.remove('night');
        b.nightMode.classList.add('sun');
    }
}