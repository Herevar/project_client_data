const {} = require(fs).promises; 
const {join}= require('path');


class Db {
    constructor(dbFileName) {
        this.dbFileName = join(__dirname, '../data', dbFileName);
        this._load();
        
    }
    
    async _load(){
        this._data = JSON.parse(await readFile(this.dbFileName, 'utf8'));
    }
    create(obj){
        this._data.push(obj);
        writeFile(this._dbFilename, JSON.stringify(this._data), 'utf8')
    }
}

const db = new Db('client.json');