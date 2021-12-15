const Router = require("express").Router;
const tournamentController = require("./controller.js");

const tournamentRouter = new Router();

//CRUD
bookRouter.get("/", tournamentController.getAll);
bookRouter.get("/query", tournamentController.getQuery);
bookRouter.get("/:id", tournamentController.getById);
bookRouter.delete("/:id", tournamentController.delete);
bookRouter.post("/", tournamentController.post);
bookRouter.patch("/:id", tournamentController.patch);

module.exports = tournamentRouter;