var mongoose = require('mongoose');
var Bicicleta = require('../../models/bicicleta')

describe('Testing Bicicletas', function(){
    beforeEach(function (done) {
        var mongoDB = 'mongodb://localhost/testdb';
        mongoose.connect(mongoDB, { useNewUrlParser: true});

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function () {
            console.log('We are connected to test database');
            done();
        })
    });

    afterEach(function (done) { 
        Bicicleta.deleteMany({}, function (err, success) {
            if (err) console.log(err);
            done();
        });
        // jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    describe('Bicicleta.createInstance', () => {
        it('crea una instancia de Bicicleta', () => {
            var bici = Bicicleta.createInstance(1, "verde", "urbana", [4.628108, -74.065407]);

            expect(bici.code).toBe(1);
            expect(bici.color).toBe("verde");
            expect(bici.modelo).toBe("urbana");
            expect(bici.ubicacion[0]).toEqual(4.628108);
            expect(bici.ubicacion[1]).toEqual(-74.065407);

        });
    });

    describe('Bicicleta.allBicis', () => {
        const myTestTimeout = 10000;
        it('comienza vacia', (done) => {
            Bicicleta.find({}, (err, bicis) => {
				expect(bicis.length).toBe(0);
				done();
			}, 100000);
        });
    });
    /*
    describe('Bicicleta.add', () => {
        it('agrega solo una bici', (done) => {
            var aBici = new Bicicleta({code: 1, color: "verde", modelo: "urbana"});
            Bicicleta.add(aBici, function (err, newBici) {
                if (err) console.log(err);
                Bicicleta.allBicis(function (err, bicis) {
                    expect(bicis.length).toEqual(1);
                    expect(bicis[0].code).toEqual(aBici.code);                    
                    
                    done();
                });
            });
        });
    });
    */
});



/*
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
*/