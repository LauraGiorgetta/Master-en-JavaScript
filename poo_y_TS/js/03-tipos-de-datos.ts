let cadena: string = 'Laura Giorgetta'
let numero: number = 12
let bool: boolean = true
let cualquiera: any = 'hola'
cualquiera = 19

let lenguajes: Array<string> = ['php', 'js', 'css']

let years: number[] = [1, 2, 3, 4]

let meses: any[] = [11, 'marzo', 10, 'enero']

console.log(meses, years, lenguajes, cualquiera, bool, numero, cadena)

//variable que puede contener solo estos 2 tipos de datos
let numYstring: number | string = 'hi';

console.log(numYstring)

numYstring = 19

console.log(numYstring)

//crear un tipo de dato
type alfanumerico = string | number

let nye1: alfanumerico = 'Nyaaaa'

console.log(nye1)
nye1 = 1;
console.log(nye1)