const Tiger = require('./tiger')
const Wolf = require('./wolf');
let pesam;
const fighting = (tiger, wolf) => {
    if(tiger.strength > wolf.strength) {
      tiger.growl();
      console.log("tiger won")
      return;
    }
   
    if(wolf.strength > tiger.strength) {
      wolf.howl();
      console.log("wolf won")
      return;
    }
   
    console.log('Tiger and Wolf have same strength');
  }
  
  
  const tiger = new Tiger();
  const wolf = new Wolf();
  console.log("tiger "+tiger.strength)
  console.log("wolf " + wolf.strength)
  
  fighting(tiger, wolf);