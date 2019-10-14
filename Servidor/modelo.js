
function Juego(){
	this.partidas={};
	this.usuarios={};

	this.crearPartida=function(nombre,nick,callback){
		var idp=nombre+nick;
		if(!this.partidas[idp]){
			this.partidas[idp]=new Partida(nombre,idp);
			this.partidas[idp].agregarJugador(this.usuarios[nick]);
		}
		callback(this.partidas[idp]);
	}

	this.agregarUsuario=function(nombre, callback){
		if (!this.usuarios[nombre]){
			console.log("Nuevo usuario: "+nombre);
			this.usuarios[nombre]=new Usuario(nombre);
		}
		callback(this.usuarios[nombre]);
	}

	this.obtenerPartidas=function(callback){
		//return this.partidas;
		callback(this.partidas);
	}

	this.obtenerUsuarios=function(callback){
		//return this.partidas;
		callback(this.usuarios);
	}

	this.unirAPartida=function(nombrePartida, nick, callback){
		if(this.partidas[nombrePartida] && this.usuarios[nick]){
			this.partidas[nombrePartida].agregarJugador(this.usuarios[nick]);
		}
		callback(this.partidas[nombrePartida].jugadores);
	}


	this.salir=function(nombrePartida,nick){
		this.partidas[nombrePartida].salir(nick);
		if(comprobarJugadores(nombrePartida)==0){
			this.eliminarPartida(nombrePartida);
		}
	}

	this.comprobarJugadores=function(nombrePartida){
		return Object.keys(this.partida[nombrePartida].jugadores).length;
	}

	this.obtenerJugadores=function(nombrePartida,callback){
		if(this.partidas[nombrePartida]){
			callback(this.partidas[nombrePartida].jugadores);
		}
	}


	this.eliminarPartida=function(nombrePartida){
		delete this.partidas[nombrePartida];
	}

}

function Partida(nombre,idp){
	this.nombre=nombre;
	this.idp=idp;
	this.jugadores={};
	this.fase=new Inicial();	
	this.agregarJugador=function(usr){
		this.fase.agregarJugador(usr,this);
	}
	this.puedeAgregarJugador=function(usr){
		this.jugadores[usr.nick]=usr;
	}
	this.salir=function(nick){
		delete this.jugadores[nick];
	}

}

function Inicial(){
	this.nombre="inicial";
	this.agregarJugador= function(usr, partida){
		partida.puedeAgregarJugador(usr);
	}
}


function Jugando(){
	this.nombre="jugando";
	this.agregarJugador= function(usr, partida){
		console.log("La partida ya ha comenzado");
	}
}


function Final(){
	this.nombre="final";
	this.agregarJugador= function(usr, partida){
		console.log("La partida ya ha acabado");
	}
}

function Usuario(nick){
	this.nick=nick;
	this.id=undefined;
}


module.exports.Juego=Juego;