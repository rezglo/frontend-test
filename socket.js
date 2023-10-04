
const io = require("socket.io")(3002, {
	cors:{
		origin: "http://localhost:3000",
		methods: ["GET","POST"],
	},
});

io.on("connection",(socket)=>{
	console.log("Se conecto un Usuario");
	
	socket.on("message", (message, roomName)=>{
		socket.broadcast.emit("message", {...message, transmitter:false});
	});
	
	socket.on("disconnect", ()=>{
		console.log("Se desconecto un usuario");
	});
	
	socket.on("joinRoom", (roomName)=>{
		console.log("Se conecto a la sala Aba 4 Love");
		socket.join(roomName);
	});	
});

console.log("Canal abierto");