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
  class Player {
    constructor(person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
        this.person = person
        this.throw = canThrowBall
        this.dodge = canDodgeBall
        this.paid = hasPaid
        this.health = isHealthy
        this.experience = yearsExperience
    }
  }
  class BlueTeammate extends Player {
    constructor(mascot, teamColor){
      super(player)
        this.mascot = mascot
        this.teamColor = teamColor
    }
  }
  class RedTeammate extends Player {
    constructor(mascot, teamColor){
      super(player)
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
      button.addEventListener('click', function() {makePlayer(person, person.name, person.id, person.age), listElement.removeChild(li)})
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
     
    })
  }
  
  const makePlayer = (person, name, id, age) => {
      //create variables to be used inside the makePlayer function
      let container = document.body.querySelector('#players')
      let liPlayer = document.createElement("li")
      let indexPerson=arrOfPeople.indexOf(person)
      let player = new Player(person, true, true, true, true, true)
      const buttonBlue = document.createElement("button")
      const buttonRed = document.createElement("button")
      buttonBlue.innerHTML = 'Assign to Blue-Team'
      buttonRed.innerHTML = 'Assign to Red-Team'

      //add eventListeners for the Blue and Red Team Buttons:
      buttonBlue.addEventListener('click', function() {assignBlue(person, name, id, age),container.removeChild(liPlayer)})
      buttonRed.addEventListener('click', function() {assignRed(name, id, age),container.removeChild(liPlayer)})
        
      //Move the player to the List of Available Players 
      liPlayer.appendChild(buttonBlue)
      liPlayer.appendChild(buttonRed)
      liPlayer.appendChild(document.createTextNode(name + " - " +"ID #: " + id + " - " + "Player Age: " + age))
      container.append(liPlayer)
      listOfPlayers.push(player)
      arrOfPeople.splice(indexPerson, 1)
    console.log(arrOfPeople)
    console.log(listOfPlayers)
    console.log(indexPerson)
    console.log(name, id, age)
    console.log(`li ${id} was clicked!`)
  }

  /*const remakePlayer = (person, name, id, age) => {
    //create variables to be used inside the makePlayer function
    let container = document.body.querySelector('#players')
    let liPlayer = document.createElement("li")
    let indexPerson=arrOfPeople.indexOf(person)
    const buttonBlue = document.createElement("button")
    const buttonRed = document.createElement("button")
    buttonBlue.innerHTML = 'Assign to Blue-Team'
    buttonRed.innerHTML = 'Assign to Red-Team'

    //add eventListeners for the Blue and Red Team Buttons:
    buttonBlue.addEventListener('click', function() {assignBlue(person, name, id, age),container.removeChild(liPlayer)})
    buttonRed.addEventListener('click', function() {assignRed(name, id, age),container.removeChild(liPlayer)})
      
    //Move the player to the List of Available Players 
    liPlayer.appendChild(buttonBlue)
    liPlayer.appendChild(buttonRed)
    liPlayer.appendChild(document.createTextNode(name + " - " +"ID #: " + id + " - " + "Player Age: " + age))
    container.append(liPlayer)
    listOfPlayers.push(player)
    arrOfPeople.splice(indexPerson, 1)
  console.log(arrOfPeople)
  console.log(listOfPlayers)
  console.log(indexPerson)
 
  console.log(`li ${id} was clicked!`)
}*/

        //Assign a player to the Blue-Team
  const assignBlue = (person, name, id, age) => {
      let container = document.body.querySelector('#blue')
      let li = document.createElement('li')
      let buttonRemove = document.createElement('button')
      buttonRemove.innerHTML = 'Remove from Blue-Team'
       
      //Create a button event that moves the selected player from the assigned team back to available players.
      buttonRemove.addEventListener('click', function() {makePlayer(person, name, id, age),container.removeChild(li)})
        
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

    //Create a button event that moves the selected player from the assigned team back to available players.
    buttonRemove.addEventListener('click', function() {makePlayer(name, id, age),container.removeChild(li)})

    li.appendChild(buttonRemove)
    li.appendChild(document.createTextNode(name + " - " +"ID #: " + id + " - " + "Player Age: " + age))
    container.append(li)
  }

  