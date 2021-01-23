const person = {
  name: ['Code', 'Mafia'],
  age: 25,
  gender: 'male',
  interests: {
    sport: 'baseball',
    music: 'karaoke'
  },
  getFullName: function() {
    console.log(this.name[0] + this.name[1])
  }
};

console.log(person);
person.getFullName();