var Bicicleta = require('../../models/bicicleta');
var request = require('request');
var server = require('../../bin/www');

describe('Bicicleta API', () => {
    describe('GET BICICLETAS /', () => {
        it('Status 200', () =>{
            expect(Bicicleta.allBicis.length).toBe(0)
            var a = new Bicicleta(1, 'rojo', 'urbana', [4.628108, -74.065407]);
            Bicicleta.add(a);

            request.get('http://localhost:3000/api/bicicletas', function(error, response, body){
                expect(response.statusCode).toBe(200);
            });
        });
    });
});

describe('POST BICICLETAS /create', () => {
    it('STATUS 200', (done) => {
        var headers = {'content-type': 'application/json'};
        var aBici = '{"id": 10, "color": "rojo", "modelo": "urbana", "lat": 4.628108, "lng": -74.065407}';
        request.post({
            headers: headers,
            url: 'http://localhost:3000/api/bicicletas/create',
            body: aBici
        }, function (error, response, body) {
            expect(response.statusCode).toBe(200);
            expect(Bicicleta.findById(10).color).toBe("rojo");
            done();            
        });
    });
});

describe('DELETE BICICLETAS /delete', () => {
    it('STATUS 204', (done) => {
        var a = new Bicicleta(1, 'rojo', 'urbana', [4.628108, -74.065407]);
        Bicicleta.add(a);
        var aBici = '{"id": 1}';
        request.delete({
            url: 'http://localhost:3000/api/bicicletas/delete',
            body: aBici
        }, function (error, response, body) {
            expect(response.statusCode).toBe(204);
            done();            
        });
    });
});


describe('PUT BICICLETAS /update', () => {
    it('STATUS 201', (done) => {
        var a = new Bicicleta(1, "rojo", "urbana", [4.628108, -74.065407]);
        Bicicleta.add(a);
        var headers = {'content-type': 'application/json'};
        var aBici = '{"id": 1, "color": "negro", "modelo": "montaña", "lat": 4.628108, "lng": -74.065407}';
        request.put({
            headers: headers,
            url: 'http://localhost:3000/api/bicicletas/update',
            body: aBici
        }, function (error, response, body) {
            expect(response.statusCode).toBe(201);
            expect(Bicicleta.findById(1).color).toBe("negro");
            done();            
        });
    });
});