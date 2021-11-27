import { func } from "./utils/calc";
import InfoMd from './files/Info.md';
import './styles/heading.css';
import './styles/paragraph.css';
console.log('file',InfoMd);
const p = document.querySelector('p');
if(p){
  p.innerText = InfoMd+"vppqtp";
}
console.log('status',process.env.API);
console.log(func(10,29))
console.log(func(10,59))
console.log(func(140,19))
