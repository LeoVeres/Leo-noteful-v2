'use strict';

const knex = require('../knex');
//------------get by searchterm---------
// let searchTerm = 'gaga';
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .modify(queryBuilder => {
//     if (searchTerm) {
//       queryBuilder.where('title', 'like', `%${searchTerm}%`);
//     }
//   })
//   .orderBy('notes.id')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
// });

//------------get by id------------
// let searchTerm = '2';

// knex('notes')
//   .first('id','title','content')
//   .where('id',`${searchTerm}`)
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

//--------updating note------------
// let searchTerm = '2';
// let newTitle = 'dogs now';
// let newContent = 'dog dog dog';

// knex('notes')
//   .returning(['title', 'content'])
//   .where('id',`${searchTerm}`)
//   .update({
//     title:`${newTitle}`,
//     content:`${newContent}`
//   })
//   .then(results => {
//     console.log(JSON.stringify(results[0], null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });
//
//--------creating a note---------------
// let newTitle = 'circus cats';
// let newContent = 'cats in the circus';
// knex('notes')
//   .returning(['id','title', 'content'])
//   .insert({
//     title:`${newTitle}`,
//     content:`${newContent}`
//   })
//   .then(results => {
//     console.log(JSON.stringify(results[0], null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

//-----------deleting a note-------------
// let testId = 3;
// knex('notes')
//   .where('id',`${testId}`)
//   .del()
//   .then(results => {
//     console.log(JSON.stringify(results[0], null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

  
