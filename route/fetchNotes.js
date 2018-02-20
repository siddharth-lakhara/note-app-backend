const Models = require('../models');

module.exports = [{
  method: 'GET',
  path: '/fetch',
  handler: (req, reply) => {
    Models.notes.findAll({
      attributes: [['keyid','key'], 'title', 'message'],
    }).then((allNotes) =>{
      console.log('Fetched notes: ', allNotes);
      reply(allNotes);
    });
  },
}];
