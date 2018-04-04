import { h } from 'preact';

import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';

const app = () => (
    <div>
        <NewTask/>
        <Tasks/>
    </div>
);

export default app;
