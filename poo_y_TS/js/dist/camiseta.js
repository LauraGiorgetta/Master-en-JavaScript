//Interface
set;
color(color, string);
get;
color();
string;
//Clase (modelo del objeto)
/*export*/
var Camiseta = /** @class */ (function () {
    //Metodos (funciones o acciones del objeto)
    //Constructor
    function Camiseta(color, modelo, marca, talla, precio) {
        this._color = color;
        this._modelo = modelo;
        this._marca = marca;
        this._talla = talla;
        this._precio = precio;
    }
    Object.defineProperty(Camiseta.prototype, "color", {
        // Getters
        get: function () {
            return this._color;
        },
        //Setters
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Camiseta.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Camiseta.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (marca) {
            this._marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Camiseta.prototype, "talla", {
        get: function () {
            return this._talla;
        },
        set: function (talla) {
            this._talla = talla;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Camiseta.prototype, "precio", {
        get: function () {
            return this._precio;
        },
        set: function (precio) {
            this._precio = precio;
        },
        enumerable: false,
        configurable: true
    });
    return Camiseta;
}());
//Instanciamos objeto
var camiseta1 = new Camiseta('red', 'long', 'Nike', 'L', 250);
camiseta1.color = 'Rojo';
camiseta1.modelo = 'Manga larga';
camiseta1.precio = 300;
console.log(camiseta1);
