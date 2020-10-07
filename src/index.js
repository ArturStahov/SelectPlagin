import './scss/main.scss';
import { Select } from './select/select.js'

const data = [
    { id: '0', value: 'react' },
    { id: '1', value: 'node' },
    { id: '2', value: 'javascript' },
    { id: '3', value: 'css' },
    { id: '4', value: 'scss' },
    { id: '5', value: 'html' },
    { id: '6', value: 'json' },
    { id: '7', value: 'npm' },
    { id: '8', value: 'ajax' },
]
const select = new Select('#select-plugin', {
    placeholder: 'выбери значение',
    data: data,
    startID: '3'
});




