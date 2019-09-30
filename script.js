const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  

  //Create Class for Player and also extend the Player class with the blue and red team assignments
  class player {
    constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
        this.throw = canThrowBall
        this.dodge = canDodgeBall
        this.paid = hasPaid
        this.health = isHealthy
        this.experience = yearsExperience
    }
  }
  class blueTeammate extends player {
    constructor(mascot, teamColor){
        this.mascot = mascot
        this.teamColor = teamColor
    }
  }
  class redTeammate extends player {
    constructor(mascot, teamColor){
        this.mascot = mascot
        this.teamColor = teamColor
  }
}


  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.name, person.id, person.age)})
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  
  const makePlayer = (name, id, age) => {
      //create variables to be used inside the makePlayer function
      let container = document.body.querySelector('#players')
      let liPlayer = document.createElement("li")
      const buttonBlue = document.createElement("button")
      const buttonRed = document.createElement("button")
      buttonBlue.innerHTML = 'Assign to Blue-Team'
      buttonRed.innerHTML = 'Assign to Red-Team'

      //add eventListeners for the Blue and Red Team Buttons:
      buttonBlue.addEventListener('click', function() {assignBlue(name, id, age)})
      buttonRed.addEventListener('click', function() {assignRed(name, id, age)})
        
      //Move the player to the List of Available Players 
      liPlayer.appendChild(buttonBlue)
      liPlayer.appendChild(buttonRed)
      liPlayer.appendChild(document.createTextNode(name + " - " +"ID #: " + id + " - " + "Player Age: " + age))
      container.append(liPlayer)
    console.log(listOfPlayers)
    console.log(`li ${id} was clicked!`)
  }
        //Assign a player to the Blue-Team
  const assignBlue = (name, id, age) => {
      let container = document.body.querySelector('#blue')
      let li = document.createElement('li')
      let buttonRemove = document.createElement('button')
      buttonRemove.innerHTML = 'Remove from Blue-Team'
      li.appendChild(buttonRemove)
      li.appendChild(document.createTextNode(name + " - " +"ID #: " + id + " - " + "Player Age: " + age))
      container.append(li)
  }

        //Assign a player to the Red-Team
  const assignRed = (name, id, age) => {
    let container = document.body.querySelector('#red')
    let li = document.createElement('li')
    let buttonRemove = document.createElement('button')
    buttonRemove.innerHTML = 'Remove from Red-Team'
    li.appendChild(buttonRemove)
    li.appendChild(document.createTextNode(name + " - " +"ID #: " + id + " - " + "Player Age: " + age))
    container.append(li)
  }