
function Juego(){
	this.partidas=[];
	this.usuarios=[];

	this.crearPartida=function(nombre,nick){
		var idp=nombre+nick;
		if(!this.partidas[idp]){
			this.partidas[idp]=new Partida(nombre,idp);
			this.partidas[idp].agregarJugador(this.usuarios[nick]);
		}
	}

	this.agregarUsuario=function(nombre){
		if (!this.usuarios[nombre]){
			this.usuarios[nombre]=new Usuario(nombre);
		}
	}

	this.obtenerPartidas=function(){
		return this.partidas;
	}

	this.unirAPartida=function(nombrePartida, nick){
		if(this.partidas[nombrePartida] && this.usuarios[nick]){
			this.partidas[nombrePartida].agregarJugador(this.usuarios[nick]);
		}
	}
}

function Partida(nombre,idp){
	this.nombre=nombre;
	this.idp=idp;
	this.jugadores=[];
	this.fase=new Inicial();	
	this.agregarJugador=function(usr){
		this.fase.agregarJugador(usr,this);
	}
	this.puedeAgregarJugador=function(usr){
		this.jugadores[usr.nick]=usr;
	}
	this.salir=function(nick){
		this.jugadores[nick]=undefined;
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