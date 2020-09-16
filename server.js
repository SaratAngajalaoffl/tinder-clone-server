const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cards = require("./dbCards");

//Initialising app

const app = express();
const port = process.env.PORT || 8001;
const mongokey =
	"mongodb+srv://armoredvortex:chandrasar@cluster0.6ntom.gcp.mongodb.net/tinder?retryWrites=true&w=majority";

//Middleware

app.use(express.json());
app.use(cors());

//DB config

mongoose.connect(mongokey, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

//routes and Endpoints

app.get("/", (req, res) => {
	res.status(200).send("Hello World");
});

app.post("/cards", (req, res) => {
	const dbCard = req.body;

	cards.create(dbCard, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			res.status(200).send(data);
		}
	});
});

app.get("/cards", (req, res) => {
	cards.find((err, data) => {
		if (err) {
			console.log(err);
		} else {
			res.status(200).send(data);
		}
	});
});

//Listner
app.listen(port, () => {
	console.log(`listening on port:${port}`);
});
