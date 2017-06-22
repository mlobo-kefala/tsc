module myModule {
  var person;
  
  person = 'John Papa';
  console.log(person.subtring(1, 4));
  
  person = {
    name: 'Collen',
    age: 25
  }
  console.log(person.subtring(1, 4));
}

/*
JS GENERADO
var myModule;
(function (myModule) {
    var person;
    person = 'John Papa';
    console.log(person.subtring(1, 4));
    person = {
        name: 'Collen',
        age: 25
    };
    console.log(person.subtring(1, 4));
})(myModule || (myModule = {}));

 */

// module myModule2 {
//   var person: string;
  
//   person = 'John Papa';
//   console.log(person.subtring(1, 4));
  
//   person = {
//     name: 'Collen',
//     age: 25
//   }
//   console.log(person.subtring(1, 4));
// }