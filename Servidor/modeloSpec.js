var modelo=require("./modelo.js");

describe("Bombergame", function() {
  var juego;

  beforeEach(function() {
    var juego=new modelo.Juego();
  });

  it("Comprobaciones iniciales", function() {
    expect(juego.usuarios.length).toEqual(0);
    expect(juego.partidas.length).toEqual(0);
  });
  
  it("Agregar usuarios", function(){
    juego.agregarUsuario('pepe', function(){});
    juego.agregarUsuario('ana', function(){});
    expect(Object.keys(juego.usuarios).length).toEqual(2);
    expect(juego.usuarios["pepe"]).not.toBe(undefined);
    expect(juego.usuarios["pepe"].nick).toBe("pepe");    
    expect(juego.usuarios["ana"]).not.toBe(undefined);
    expect(juego.usuarios["ana"].nick).toBe("ana");  
  })    

  it("Agregar partidas", function(){
    juego.agregarUsuario('pepe',function(){});
    juego.crearPartida('una','pepe', function(){})
    expect(Object.keys(juego.partidas).length).toEqual(1);
    expect(juego.partidas["unapepe"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"].idp).toBe("unapepe");
  }) 

  it("Unir a partida", function(){
    juego.agregarUsuario('pepe', function(){});
    juego.agregarUsuario('ana', function(){});
    expect(juego.usuarios["pepe"]).not.toBe(undefined);
    expect(juego.usuarios["ana"]).not.toBe(undefined);
    juego.crearPartida('una','pepe', function(){});
    expect(Object.keys(juego.partidas).length).toEqual(1);
    expect(juego.partidas["unapepe"]).not.toBe(undefined);
    juego.unirAPartida('unapepe', 'ana', function(){});
    expect(Object.keys(juego.partidas['unapepe'].jugadores).length).toEqual(2);
  }) 

  it("Salir de partida", function(){
    juego.agregarUsuario('pepe', function(){});
    expect(juego.usuarios["pepe"]).not.toBe(undefined);
    juego.crearPartida('una','pepe', function(){});
    expect(Object.keys(juego.partidas['unapepe'].jugadores).length).toEqual(1);
    juego.partidas["unapepe"].salir("pepe");
    expect(Object.keys(juego.partidas['unapepe'].jugadores).length).toEqual(0);
  }) 

  it("Salir de partida (ultimo jugador)", function(){
    juego.agregarUsuario('pepe', function(){});
    expect(juego.usuarios["pepe"]).not.toBe(undefined);
    juego.crearPartida('una','pepe', function(){});
    expect(Object.keys(juego.partidas['unapepe'].jugadores).length).toEqual(1);
    juego.salir("unapepe","pepe");
    //expect(juego.partidas['unapepe'].jugadores["pepe"]).toBe(undefined);
    //expect(Object.keys(partida.jugadores).length)toBe(0);
  }) 
});

