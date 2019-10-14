function ClienteRest(){

	this.agregarUsuario=function(nick){
		$.getJSON("/agregarUsuario/"+nick,function(data){    
    		console.log(data);
    		mostrarUsuario(data);
		});
	}

	this.crearPartida=function(nombrePartida,nick){
		$.getJSON("/crearPartida/"+nombrePartida+"/"+nick,function(data){    
    		console.log(data);
		});
	}

	this.obtenerPartidas=function(){
		$.getJSON("/obtenerPartidas/",function(data){    
    		console.log(data);
		});
	}

	this.obtenerUsuarios=function(){
		$.getJSON("/obtenerUsuarios/",function(data){    
    		console.log(data);
		});
	}

	this.unirAPartida=function(nombrePartida,nick){
		$.getJSON("/unirAPartida/"+nombrePartida+"/"+nick,function(data){    
    		console.log(data);
		});
	}

	this.obtenerJugadores=function(nombrePartida){
		$.getJSON("/obtenerJugadores/"+nombrePartida,function(data){    
    		console.log(data);
		});
	}
}