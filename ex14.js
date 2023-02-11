import _ from 'lodash'

const normalize = (object) => {

  object.name = _.capitalize(object.name);
  object.description = object.description.toLowerCase();
  
  return object;
}

const lesson = {
  name: 'ДеструкТУРИЗАЦИЯ',
  description: 'кАК УдиВить ДРУзей',
}

console.log(normalize(lesson));

