const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {
            username: 'nicholl',
            password: 'rHUnhgFbkGRLNVyX',
            email: 'Nicholl.OblitasCosta@p3foundation.org',
            role: 'Coordinator',
            country: 'Kiribati',
            organization_title: 'CEO'
        },
        {
            username: 'rhett',
            password: 'wwJnkvZsAYQVJwTQ',
            email: 'rhett@wildmadagascar.org',
            role: 'Coordinator',
            country: 'Madagascar',
            organization_title: 'CEO'
        },
        {
            username: 'a.dodson',
            password: 'QCJQZstjnXUqnjNB',
            email: 'ana@peruvianhearts.org',
            role: 'Coordinator',
            country: 'Peru',
            organization_title: 'Founder'
        },
        {
            username: 'wholeearthgirl',
            password: 'MXpsXRzytLdVRGxw',
            email: 'vegangoddess116@yahoo.com',
            role: 'Donor'
        },
        {
            username: 'lucysmith',
            password: 'eeNtgXmnPWWeKFdv',
            email: 'lucysmith@gmail.com',
            role: 'Donor'
        },
        {
            username: 'orion',
            password: 'wLhXKDfzcuDLMePn',
            email: 'orion@goodhandshelp.org',
            role: 'Donor'
        },
    ]);
    });
};
