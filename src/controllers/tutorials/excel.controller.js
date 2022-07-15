const db = require("../../models");
const Tutorial = db.tutorials;
const director = db.imdb_director
const Imdb_movies = db.Imdb_movies
const Imdb_actor_movies = db.imdb_actor_role
const Director_genere = db.director_generes
const movies_directors = db.movies_directors
const movie_genre = db.movies_genre
const readXlsxFile = require("read-excel-file/node");
const excel = require("exceljs");

exports.upload = async (req, res) => {
  try {
    // if (req.file == undefined) {
    //   return res.status(400).send("Please upload an excel file!");
    // }
    const path = require('path');

    const paths = path.join(__dirname, '../../../resources/static/assets/uploads/actors.xlsx');


    readXlsxFile(paths).then((rows) => {
      // skip header
      rows.shift();

      let tutorials = [];

      rows.forEach((row) => {
        let tutorial = {
          actor_id: row[0],
          first_name: row[1],
          last_name: row[2],
          gender: row[3],
        };

        tutorials.push(tutorial);
      });

      Tutorial.bulkCreate(tutorials)
        .then(() => {
          console.log({
            message: "Uploaded the file successfully: "
          });
        })
        .catch((error) => {
          console.log({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

exports.upload_directors = async (req, res) => {
  try {
    // if (req.file == undefined) {
    //   return res.status(400).send("Please upload an excel file!");
    // }
    const path = require('path');

    const paths = path.join(__dirname, '../../../resources/static/assets/uploads/imdb_directors.xlsx');


    readXlsxFile(paths).then((rows) => {
      // skip header
      rows.shift();

      let tutorials = [];

      rows.forEach((row) => {
        let tutorial = {
          id: row[0],
          first_name: row[1],
          last_name: row[2],
        };

        tutorials.push(tutorial);
      });

      director.bulkCreate(tutorials)
        .then(() => {
          console.log({
            message: "Uploaded the file successfully: "
          });
        })
        .catch((error) => {
          console.log({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

exports.upload_Imdb_movies = async (req, res) => {
  try {
    // if (req.file == undefined) {
    //   return res.status(400).send("Please upload an excel file!");
    // }
    const path = require('path');

    const paths = path.join(__dirname, '../../../resources/static/assets/uploads/imdb_movies.xlsx');


    readXlsxFile(paths).then((rows) => {
      // skip header
      rows.shift();

      let tutorials = [];

      rows.forEach((row) => {
        let tutorial = {
          movies_id: row[0],
          name: row[1],
          year: row[2],
          rank: row[3]
        };

        tutorials.push(tutorial);
      });

      Imdb_movies.bulkCreate(tutorials)
        .then(() => {
          console.log({
            message: "Uploaded the file successfully: "
          });
        })
        .catch((error) => {
          console.log({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};



exports.upload_movies_actor_role = async (req, res) => {
  try {
    // if (req.file == undefined) {
    //   return res.status(400).send("Please upload an excel file!");
    // }
    const path = require('path');

    const paths = path.join(__dirname, '../../../resources/static/assets/uploads/imdb_Actors_roles.xlsx');


    readXlsxFile(paths).then((rows) => {
      // skip header
      rows.shift();

      let tutorials = [];

      rows.forEach((row) => {
        let tutorial = {
          actor_role_ids: row[0],
          actor_id: row[0],
          movie_id: row[1],
          role: row[2]
        };

        tutorials.push(tutorial);
      });

      Imdb_actor_movies.bulkCreate(tutorials)
        .then(() => {
          console.log({
            message: "Uploaded the file successfully: "
          });
        })
        .catch((error) => {
          console.log({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};




exports.upload_movies_actor_role = async (req, res) => {
  try {
    // if (req.file == undefined) {
    //   return res.status(400).send("Please upload an excel file!");
    // }
    const path = require('path');

    const paths = path.join(__dirname, '../../../resources/static/assets/uploads/imdb_Actors_roles.xlsx');


    readXlsxFile(paths).then((rows) => {
      // skip header
      rows.shift();

      let tutorials = [];

      rows.forEach((row) => {
        let tutorial = {
          actor_role_ids: row[0],
          actor_id: row[0],
          movie_id: row[1],
          role: row[2]
        };

        tutorials.push(tutorial);
      });

      Imdb_actor_movies.bulkCreate(tutorials)
        .then(() => {
          console.log({
            message: "Uploaded the file successfully: "
          });
        })
        .catch((error) => {
          console.log({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};



exports.genre_dir = async (req, res) => {
  try {
    // if (req.file == undefined) {
    //   return res.status(400).send("Please upload an excel file!");
    // }
    const path = require('path');

    const paths = path.join(__dirname, '../../../resources/static/assets/uploads/dir_genre.xlsx');


    readXlsxFile(paths).then((rows) => {
      // skip header
      rows.shift();

      let tutorials = [];

      rows.forEach((row,index) => {
        console.log(row);
        let tutorial = {
          director_genre_id: index+1,
          director_id: row[0],
          genre: row[1],
          prob: row[2]
        };

        tutorials.push(tutorial);
      });

      Director_genere.bulkCreate(tutorials)
        .then(() => {
          console.log({
            message: "Uploaded the file successfully: "
          });
        })
        .catch((error) => {
          console.log({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};




exports.movies_director = async (req, res) => {
  try {
    // if (req.file == undefined) {
    //   return res.status(400).send("Please upload an excel file!");
    // }
    const path = require('path');

    const paths = path.join(__dirname, '../../../resources/static/assets/uploads/movie_dir.xlsx');


    readXlsxFile(paths).then((rows) => {
      // skip header
      rows.shift();

      let tutorials = [];

      rows.forEach((row,index) => {
        console.log(row);
        let tutorial = {
          movies_director_id: index+1,
          director_id: row[0],
          movie_id: row[1]
        };

        tutorials.push(tutorial);
      });

      movies_directors.bulkCreate(tutorials)
        .then(() => {
          console.log({
            message: "Uploaded the file successfully: "
          });
        })
        .catch((error) => {
          console.log({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};



exports.movies_genres = async (req, res) => {
  try {
    // if (req.file == undefined) {
    //   return res.status(400).send("Please upload an excel file!");
    // }
    const path = require('path');

    const paths = path.join(__dirname, '../../../resources/static/assets/uploads/movies_genre.xlsx');


    readXlsxFile(paths).then((rows) => {
      // skip header
      rows.shift();

      let tutorials = [];

      rows.forEach((row,index) => {
        console.log(row);
        let tutorial = {
          movies_genre_id: index+1,
          movie_id: row[0],
          genre: row[1]
        };

        tutorials.push(tutorial);
      });

      movie_genre.bulkCreate(tutorials)
        .then(() => {
          console.log({
            message: "Uploaded the file successfully: "
          });
        })
        .catch((error) => {
          console.log({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};


// upload()
// const getTutorials = (req, res) => {
//   Tutorial.findAll()
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials.",
//       });
//     });
// };

// const download = (req, res) => {
//   Tutorial.findAll().then((objs) => {
//     let tutorials = [];

//     objs.forEach((obj) => {
//       tutorials.push({
//         id: obj.id,
//         title: obj.title,
//         description: obj.description,
//         published: obj.published,
//       });
//     });

//     let workbook = new excel.Workbook();
//     let worksheet = workbook.addWorksheet("Tutorials");

//     worksheet.columns = [
//       { header: "Id", key: "id", width: 5 },
//       { header: "Title", key: "title", width: 25 },
//       { header: "Description", key: "description", width: 25 },
//       { header: "Published", key: "published", width: 10 },
//     ];

//     // Add Array Rows
//     worksheet.addRows(tutorials);

//     res.setHeader(
//       "Content-Type",
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//     );
//     res.setHeader(
//       "Content-Disposition",
//       "attachment; filename=" + "tutorials.xlsx"
//     );

//     return workbook.xlsx.write(res).then(function () {
//       res.status(200).end();
//     });
//   });
// };

// module.exports = {
//   upload,
//   getTutorials,
//   download,
// };
