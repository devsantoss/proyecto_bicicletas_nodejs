# Proyecto_bicicletas_nodejs

Proyecto de red de bicicletas usando nodejs, express y mongoDB.

## Ejecución del proyecto

```
npm install
npm run start
```
o 
```
npm run devstart
```

## Semana 1

### Resultado de npm run devstart

![servidor corriendo](https://imgur.com/IP5mCUo.png)


### Mapa centrado en la ciudad y marcadores de bicicletas

![mapa centrado en Bogotá](https://imgur.com/luFAusi.png)

* Bicicletas en memoria 
![](https://imgur.com/VWL1R7D.png)

![](https://imgur.com/QULeyCx.png)

### Postman

![](https://imgur.com/0hdbt25.png)

**Endpoints de la API para usar en postman**

* http://localhost:3000/api/bicicletas (GET para obtener la cantidad total de bicicletas)
* http://localhost:3000/api/bicicletas/create (POST para crear una nueva bicicleta)
* http://localhost:3000/api/bicicletas/update (PUT para actualizar una bicicleta)
* http://localhost:3000/api/bicicletas/delete (DELETE para borrar una bicicleta)

## Semana 2 

### Unit Testing en modelo y API

![](https://imgur.com/AQnH3NH.png)

![](https://imgur.com/Edr3EMp.png)

### Realizando pruebas en Postman de los endpoints de la API

#### Estado inicial de la api sin bicicletas
![](https://imgur.com/sIeNUOG.png)

#### Añadir una nueva bicicleta
![](https://imgur.com/i6s75Aa.png)
Petición GET para verificar la creación de la nueva bicicleta
![](https://imgur.com/f5ms77Q.png)

#### Borrar una bicicleta
![](https://imgur.com/GETJewl.png)
Petición GET para verificar la eliminación de la nueva bicicleta
![](https://imgur.com/Wo1AelM.png)

#### Actualizar una bicicleta
Bicicleta inicial
![](https://imgur.com/f5ms77Q.png)
Petición PUT para actualizar la bici con id 1
![](https://imgur.com/phNO5ly.png)
Petición GET para comprobar la actualización
![](https://imgur.com/WmwQlMd.png)

