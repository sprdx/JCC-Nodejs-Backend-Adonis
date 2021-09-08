import Kelas from './kelas'

class Bootcamp {
    constructor(name) {  
        this._name = name
        this._classes = []
    }
  
    createClass(nama, level, instruktur) {
        this._classes = new Kelas()         

    }
  
    get classes() {
        return this._classes
    }
  
}

const sanber = new Bootcamp("sanbercode")

sanber.createClass("Laravel", "beginner", "abduh")
sanber.createClass("React", "beginner", "abdul")

console.log(sanber.classes)
