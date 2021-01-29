const ojt = {
  first_name: 'Yamabe',
  last_name: 'Koji',
  printFullName: function() {
    console.log('hello');
  }
}

class Myojt {
  constructor() {
    this.first_name = 'Yamabe';
    this.last_name = 'Koji';
  }

  printFullName() {
    console.log('hello');
  }
}

const ojt2 = new Myojt();

ojt.printFullName();
ojt2.printFullName();
