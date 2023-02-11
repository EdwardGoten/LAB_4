import _ from 'lodash'

const normalize = (object) => {

  object.name = _.capitalize(object.name);
  object.description = object.description.toLowerCase();
  
  return object;
}

const lesson = {
  name: 'Р”РµСЃС‚СЂСѓРєРўРЈР РР—РђР¦РРЇ',
  description: 'РєРђРљ РЈРґРёР’РёС‚СЊ Р”Р РЈР·РµР№',
}

console.log(normalize(lesson));

