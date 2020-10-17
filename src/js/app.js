// TODO: write your code here
import ArrayBufferConverter from './basic';


const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
const loader = new ArrayBufferConverter(data);

console.log(loader.load(loader.getBuffer()));
