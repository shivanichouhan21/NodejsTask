const db = require("../models");
const Tutorial = db.tutorials;
const director = db.imdb_director
const Imdb_movies = db.IMDBmovies
const Imdb_actor_movies = db.imdb_actor_role
const Director_genere = db.director_generes
const movies_directors = db.movies_directors
const movie_genre = db.movies_genre
const Sequelize = require('sequelize');
const Op = Sequelize.Op;





exports.findAllMovies = (req, res) => {
    movie_genre.findAll({
        where: { genre: req.query.genre },
        include: [{
            model: Imdb_movies,
            attributes: ["movie_id", 'name', "year", "rank"]
        }
        ]
    }).then(async (data) => {
        if (!data) {
            return res.status(404).json({ message: 'movies Not Found' });
        } else {
            let page = req.query.page;
            data.slice((page - 1) * 10, page * 10);
            res.send({ data: data});
        }
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error have occurred when retrieving the tutorials."
        });
    });
};



exports.Actors_list = (req, res) => {
    let top_genres = []
    let obj = {}
    let allMovies = []
    Imdb_actor_movies.findAll({
        where: { actor_id: req.params.id },
        include: [{
            model: Tutorial,
            attributes: ['first_name', "actor_id"],
        }, {
            model: Imdb_movies,
            attributes: ['movie_id', 'name', "year"],
        }]
    })
        .then(async (actor_data) => {
            if (!actor_data) {
                return res.status(404).json({ message: 'actor Not Found' });
            } else {
                let partnerActorData = []

                if (actor_data.length > 0) {
                    await Promise.all(
                        actor_data.map(async (elem) => {

                            allMovies.push(elem.IMDBmovie)
                            const user = await movie_genre.findOne({
                                where: { movies_id: elem.movies_id },
                            });
                            if (user) {
                                top_genres.push(user.toJSON())
                            }
                            const partActor = await Imdb_actor_movies.findAll({
                                where: {
                                    [Op.and]: [
                                        { movies_id: elem.movies_id },
                                        { actor_id: { [Op.ne]: req.params.id } }
                                    ]
                                },
                                include: [{
                                    model: Tutorial,
                                    attributes: ['first_name', "actor_id"],
                                }, {
                                    model: Imdb_movies,
                                    attributes: ['movie_id', 'name', "year"],
                                }]
                            })
                            if (partActor) {
                                partnerActorData.push(...partActor)
                            }

                            //   
                        })).then(async (data) => {
                            obj.id = actor_data[0].actor_id
                            obj.name = actor_data[0]["imdb_actor"]["first_name"]
                            obj.top_genres = top_genres
                            obj.number_of_movies = allMovies
                            let partner_actor_main_data = []

                            const result = await [...partnerActorData.reduce((mp, o) => {
                                let objD = o.toJSON()
                                if (!mp.has(objD.movies_id)) mp.set(objD.movies_id, { ...objD, count: 0 });
                                mp.get(objD.movies_id).count++;
                                return mp;
                            }, new Map).values()];
                            await result.forEach(element => {
                                partner_actor_main_data.push({
                                    partner_actor_id: element.actor_id,
                                    partner_actor_name: element["imdb_actor"]["first_name"],
                                    moviesName: element["IMDBmovie"]["name"],
                                    number_of_shared_movies: element.count

                                })
                            });
                            obj.most_frequent_partner = partner_actor_main_data

                        })

                    return res.status(200).json(obj);
                } else {
                    return res.status(200).json({ msg: "data not found" })
                }
            }


        })
        .catch((error) => {
            console.log(error);
            res.status(400).json(error)
        });


    // Imdb_actor_movies.findAll({
    //     include: [
    //         // {
    //             // as:"actors",
    //             Tutorial

    //         // },
    //         ]
    //   }).then(posts => {
    //     /* ... */
    //     console.log("*********************\n\n\n\n\n",posts);
    //     res.send(posts)
    //   });

    // movies_directors.findAll({
    //     where: {},
    //     include: [{
    //         model: 'imdb_movies',
    //         where: {}
    //     }]
    //   }).then((data) => {


    //   });

    // Imdb_movies.findAndCountAll()
    //     .then((data) => {
    //         let page = req.query.page;
    //         let director = req.query.director      // page number
    //         let pages = Math.ceil(data.count / limit);
    //         offset = limit * (page - 1);
    //         Imdb_movies.findAll({
    //             // attributes: ['id', 'first_name', 'last_name', 'date_of_birth'],
    //             limit: limit,
    //             offset: offset,
    //             $sort: { id: 1 }
    //         })
    //             .then((users) => {
    //                 res.status(200).json({ 'result': users, 'count': data.count, 'pages': pages });
    //             });
    //     })
    //     .catch(function (error) {
    //         res.status(500).send('Internal Server Error');
    //     });
};