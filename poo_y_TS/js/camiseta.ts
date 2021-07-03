//Interface

interface CamisetaBase{
    set color(color:string)
    get color():string
}


//Clase (modelo del objeto)

    /*export*/
    class Camiseta implements CamisetaBase{
    //Propiedades (caracteristicas del objeto)
    private _color: string
    private _modelo: string
    private _marca: string
    private _talla: string
    private _precio: number
    //Metodos (funciones o acciones del objeto)

    //Constructor
    constructor(color:string, modelo:string, marca:string, talla:string, precio:number){
        this._color = color
        this._modelo = modelo
        this._marca = marca
        this._talla = talla
        this._precio = precio
    }


    // Getters
    public get color(): string {
        return this._color
    }
    public get modelo(): string {
        return this._modelo
    }
    public get marca(): string {
        return this._marca
    }
    public get talla(): string {
        return this._talla
    }
    public get precio(): number {
        return this._precio
    }


    //Setters
    public set color(color: string) {
        this._color = color
    }
    public set modelo(modelo: string) {
        this._modelo = modelo
    }
    public set marca(marca: string) {
        this._marca = marca
    }
    public set talla(talla: string) {
        this._talla = talla
    }
    public set precio(precio: number) {
        this._precio = precio
    }

}

//Instanciamos objeto
let camiseta1 = new Camiseta('red', 'long', 'Nike', 'L', 250);

camiseta1.color = 'Rojo'
camiseta1.modelo = 'Manga larga'
camiseta1.precio = 300

console.log(camiseta1)

