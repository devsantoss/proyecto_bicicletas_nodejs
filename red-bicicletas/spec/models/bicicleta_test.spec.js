var Bicicleta = require('../../models/bicicleta')

beforeEach(() => {
    Bicicleta.allBicis = [];
});

//No deben haber bicicletas
describe('Bicicleta.allBicis', () => {
    it('Comienza vacia', () => {
        expect(Bicicleta.allBicis.length).toBe(0)
    })
});

//Agregar una bicicleta
describe('Bicicleta.add', () => {
    it('Agregar una', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
        var a = new Bicicleta(1, 'rojo', 'urbana', [4.628108, -74.065407]);
        Bicicleta.add(a);

        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);

    })
});

// Encontrar por id una bicicleta
describe('Bicicleta.findById', () => {
    it('debe devolver la bici con id 1', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
        var a = new Bicicleta(1, 'rojo', 'urbana', [4.628108, -74.065407]);
        var b = new Bicicleta(2, 'rojo', 'urbana', [4.628108, -74.065407]);
        Bicicleta.add(a);
        Bicicleta.add(b);

        var targetBici = Bicicleta.findById(1);

        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(a.color);
        expect(targetBici.modelo).toBe(a.modelo);

    })
});

// Remover por id una bicicleta 
describe('Bicicleta.removeById', () => {
    it('debe eliminar la bici con id 1', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
        var a = new Bicicleta(1, 'rojo', 'urbana', [4.628108, -74.065407]);
        Bicicleta.add(a);
        expect(a.id).toBe(1);

        Bicicleta.removeById(1);

        expect(Bicicleta.allBicis.length).toBe(0);
    })
});