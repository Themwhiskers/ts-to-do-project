import * as c from './components/uiElements';
import * as b from './components/btnElements';
import { btnfunc as bf } from './domServices/buttonService';
import { setOpen as so } from './domServices/configService';
import * as nm from './domServices/nightModeService';
import { taskManager as tm } from './domServices/taskManeger';
import { promptSender as ps, cleanUp as cu } from './domServices/promptService';

c.body!.classList.add('light-theme');
c.body!.appendChild(c.promptNav);
    c.promptNav!.appendChild(c.form);
    c.form!.appendChild(c.inputPrompt);
    c.form!.appendChild(c.formHousing);
        c.formHousing!.appendChild(b.addPrompt);
        c.formHousing!.appendChild(b.clearPrompt);
    c.body!.appendChild(c.allTasks);
    c.allTasks.appendChild(c.newList);
    c.allTasks.appendChild(c.comList);
c.body!.appendChild(c.dataControl);
    c.dataControl.appendChild(c.dataDiv);
    c.dataDiv.appendChild(b.settings);
        c.dataDiv.appendChild(b.purge);
        c.dataDiv.appendChild(b.nightMode);
        
        bf(); so(); ps(); cu();
        
tm.loadTasks();
tm.renderTask();

nm.switchTheme();
nm.setTheme();