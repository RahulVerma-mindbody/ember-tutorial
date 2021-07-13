import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return [
      {firstName: 'Akash', lastName: 'Badhe', role: 'Sr. Software Engineer'},
      {firstName: 'Rahul', lastName: 'Verma', role: 'Sr. Software Engineer'},
      {firstName: 'Boby', lastName: 'stanzo', role: 'Principle Engineer'},
      {firstName: 'Kirill', lastName: 'Shyplyko', role: 'Software Engineer'},
    ];
  }
});
