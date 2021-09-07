// Soal Nomor 1

import sapa from './lib/soal1'
import convert from './lib/soal2'

const args = process.argv.slice(2)
const command = args[0]

switch (command) {
    case "sapa":
        let nama = args[1] 
        console.log(sapa(nama))
        break;

    case "convert":
        let name = args[1]
        let domisili = args[2]
        let umur = args[3]
        console.log(convert(name, domisili, umur))  
    default:
        break;
}