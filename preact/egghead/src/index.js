import { h, render } from 'preact';

import Clock from './components/Clock/Clock';
import Input from './components/Input/Input';

render(
    (
        <div>
            <Clock/>
            <Input/>
        </div>
    ),
    document.getElementById('preactMountPoint')
);
