const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("users")
    .del()
    .then(function() {
      return knex("users").insert([
        {
          username: "nicholl",
          password: bcrypt.hashSync("password", 12),
          email: "Nicholl.OblitasCosta@p3foundation.org",
          role: "Coordinator",
          country: "Kiribati",
          organization_title: "CEO"
        },
        {
          username: "rhett",
          password: bcrypt.hashSync("password", 12),
          email: "rhett@wildmadagascar.org",
          role: "Coordinator",
          country: "Madagascar",
          organization_title: "CEO"
        },
        {
          username: "a.dodson",
          password: bcrypt.hashSync("password", 12),
          email: "ana@peruvianhearts.org",
          role: "Coordinator",
          country: "Peru",
          organization_title: "Founder"
        },
        {
          username: "wholeearthgirl",
          password: bcrypt.hashSync("password", 12),
          email: "vegangoddess116@yahoo.com",
          role: "Donor"
        },
        {
          username: "lucysmith",
          password: bcrypt.hashSync("password", 12),
          email: "lucysmith@gmail.com",
          role: "Donor"
        },
        {
          username: "orion",
          password: bcrypt.hashSync("password", 12),
          email: "orion@goodhandshelp.org",
          role: "Donor"
        }
      ]);
    });
};
