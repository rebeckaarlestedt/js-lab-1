


function printDetails(person) {
  if (!person.name) return 'why are you not updating git?';


  const age = person.age ? person.age : 0;
  const country = person.country ? person.country : 'Ghana';

  return `Hihihi ${person.name} from ${country} with age ${age} years`;
  console.log('You made it here boss!!!');
}

const message = printDetails({name: 'Rebecka', age: '33', country: 'Sweden' });
console.log(message);

let hejsvejs = 'hej'; 
