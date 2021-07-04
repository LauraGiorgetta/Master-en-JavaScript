//Interface
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//**La clase hijo tambien tiene que implementar estos metodos porque sino tira error
/* interface CamisetaBase {
    set color(color: string)
    get color(): string
}

*/
//* Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log('Camiseta estampada con el logo de: ' + logo);
        };
    };
}
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
    Camiseta = __decorate([
        estampar('Gucci Gang')
    ], Camiseta);
    return Camiseta;
}());
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Sudadera.prototype, "capucha", {
        //Constructor
        //** Toma automaticamente el constructor del padre
        /*constructor(color:string, modelo:string, marca:string, talla:string, precio:number, capucha:boolean){
            super(color, modelo, marca, talla, precio)
            this._capucha = capucha
        }*/
        //Getters
        get: function () {
            return this._capucha;
        },
        set: function (capucha) {
            this._capucha = capucha;
        },
        enumerable: false,
        configurable: true
    });
    return Sudadera;
}(Camiseta));
//Instanciamos objeto
var camiseta1 = new Camiseta('red', 'long', 'Nike', 'L', 250);
camiseta1.color = 'Rojo';
camiseta1.modelo = 'Manga larga';
camiseta1.precio = 300;
console.log(camiseta1);
//* Como esta el constructor automatico no toma el ultimo valor del hijo, solo los del padre 
var sudadera1 = new Sudadera('Azul', 'fina con capucha', 'Adidas', 'XL', 500);
sudadera1.capucha = true;
console.log(sudadera1);
