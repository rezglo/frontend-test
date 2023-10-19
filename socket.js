
const io = require("socket.io")(3002, {
	cors:{
		origin: "http://localhost:3000",
		methods: ["GET","POST"],
	},
});

io.on("connection",(socket)=>{
	console.log("A User connected.");
	
	socket.on("message", (message, roomName)=>{
		socket.broadcast.emit("message", {...message, transmitter:false});
	});
	
	socket.on("disconnect", ()=>{
		console.log("A user was disconnected.");
	});
	
	socket.on("joinRoom", (roomName)=>{
		console.log("He connected to the REZGLO room.");
		socket.join(roomName);
	});	
});

console.log("Open channel.");