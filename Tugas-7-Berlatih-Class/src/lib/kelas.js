class Kelas {

    constructor(nama, level, instruktur) {
  
      this._nama = nama
      this._level = level
      this._instruktur = instruktur
  
    }
  
  
    get nama() {
        return this._nama
    }

    get level() {
        return this._level
    }

    get instruktur() {
        return this.instruktur
    }
  
}

export default Kelas