var express = require("express");
var app = express();

app.set("port", 5000)
  .use(express.json())
  .use(express.urlencoded({extended:true}))
  .use(express.static(__dirname + "/public"))
  .get("/video/:id", getVideo)
  .get("/tags", getTags)
  .post("/video", postVideo)
  .listen(app.get("port"), function() {
  	console.log("Listening on port: " + app.get("port"));
  });

function postVideo(req, res) {
	console.log("Creating a new video");

	var title = req.body.title;
	console.log("Title: " + title);

	res.json({success:true});
}

function getVideo(req, res) {
	console.log("Getting video...");
	var id = req.params.id;
	console.log("Looking for video with id: " + id);

	// TODO: Get the video from the DB here...

	var result = {title: "Charlie bit my finger",
				  id: id,
				  link: "https://www.youtube.com/watch?v=_OBlgSz8sSM"};

	res.json(result);				  
}

function getTags(req, res) {
	console.log("Getting tags");
	var result = [{id: 1, name:"Comedy"},
				  {id: 2, name:"Cat Videos"},
				  {id: 3, name:"Action"}];

	res.json(result);
}