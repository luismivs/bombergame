describe("Bombergame", function() {
  var juego;

  beforeEach(function() {
    juego=new Juego();
  });

  it("Comprobaciones iniciales", function() {
    expect(juego.usuarios.length).toEqual(0);
    expect(juego.partidas.length).toEqual(0);
  });
  
  it("Agregar usuarios", function(){
    juego.agregarUsuario('pepe');
    juego.agregarUsuario('ana');
    expect(Object.keys(juego.usuarios).length).toEqual(2);
    expect(juego.usuarios["pepe"]).not.toBe(undefined);
    expect(juego.usuarios["pepe"].nick).toBe("pepe");    
    expect(juego.usuarios["ana"]).not.toBe(undefined);
    expect(juego.usuarios["ana"].nick).toBe("ana");  
  })    

  it("Agregar partidas", function(){
    juego.agregarUsuario('pepe');
    juego.crearPartida('una','pepe')
    expect(Object.keys(juego.partidas).length).toEqual(1);
    expect(juego.partidas["unapepe"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"].idp).toBe("unapepe");
  }) 

  it("Unir a partida", function(){
    juego.agregarUsuario('pepe');
    juego.agregarUsuario('ana');
    expect(juego.usuarios["pepe"]).not.toBe(undefined);
    expect(juego.usuarios["ana"]).not.toBe(undefined);
    juego.crearPartida('una','pepe');
    expect(Object.keys(juego.partidas).length).toEqual(1);
    expect(juego.partidas["unapepe"]).not.toBe(undefined);
    juego.unirAPartida('unapepe', 'ana');
    expect(Object.keys(juego.partidas['unapepe'].jugadores).length).toEqual(2);
  }) 

});

