const {readFile, writeFile} = require('fs').promises; 
const {join}= require('path');
// const {v4 : uuid} = require('uuid'); // losowe id; i nazwe pliku z 'v4' zmieniamy na 'uuid'

class Db {
    constructor(dbFileName) {
        this.dbFileName = './data/db.json'
        // this.dbFileName = join(__dirname, '../data', dbFileName);
        this._load();
        
    }
    
    async _load(){
        this._data = JSON.parse(await readFile(this.dbFileName, 'utf8'));
    }
    create(obj){
        this._data.push(
            obj)
            // {
            // id : '123asd',
            // ...obj,}); // wez wszystkie dane ktore chciał wstawic i dodaj jeszcze jedna info
        //rozporaszamy cała zawartość 'obj' i dodajemy kazdej pozycji id
        // writeFile(this.dbFilename, JSON.stringify(this._data), 'utf8') - NIE DZIAŁA
        writeFile('./data/db.json', JSON.stringify(this._data), 'utf8')
    }
    getall() {
        return this._data;
    }
}   

const db = new Db('db.json');

module.exports ={db}