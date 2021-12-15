const Tournaments = require('./model');

const tournamentController = {
    getAll: (req, res) => {
        res.send(Tournament);
    },

    getQuery: (req, res) => {
        let queryTournament = Tournament;
        if (req.query.country)
            queriedTournament = queriedTournament.filter((tournament) => 
            tournament.country.includes(req.query.country)
        );
        if (req.query.age)
            queriedTournament = queriedTournament.filter((tournament) => 
            tournament.age.includes(req.query.age)
        );
        res.send(queriedTournament);
    },

    getById: (req, res) => {
        let tournament = Tournament.find((tournament) => tournament.id === parseInt(req.params.id));
        if (tournament !== null) res.status(200).send(book);
        else res.status(404).send("Not Found");
    },

    delete: (req, res) => {
        let index = Tournament.findIndex((tournament) => tournament.id === parseInt(req.params.id));
        if (index >= 0) {
            let deletedTournament = Tournament[index];
            Tournament.splice(index, 1);
            res.send(deletedTournament);
        } else res.status(404).send("Not Found");
    },

    post: (req, res) => {
        let newTournament = {
            id: Number(Date.now()),
            ...req.body,
        };
        Tournament.push(newTournament);
        res.send(newTournament);
    },
    patch: (req, res) => {
        let index = Tournaments.findIndex((tournament) => tournament.id === parseInt(req.params.id));
        if (index >= 0) {
            let updatedTournament = Tournaments[index];
            for (let key in updatedTournament)
                if (req.body[key]) updatedTournament[key] = req.body[key];
            res.send(updatedTournament);
        } else res.status(404).send("Not Found");
    }
};

module.exports = tournamentController;