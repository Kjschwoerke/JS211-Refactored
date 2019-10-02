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

      super(Player)
        this.mascot = mascot
        this.teamColor = teamColor
    }
  }
  class RedTeammate extends Player {
    constructor(mascot, teamColor){
      super(Player)
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
  
  const makePlayer = (person) => {
      //create variables to be used inside the makePlayer function
      let container = document.body.querySelector('#players')
      let liPlayer = document.createElement("li")
      let indexPerson=arrOfPeople.indexOf(person)
      let indexRed = redTeam.indexOf(person)
      let indexBlue = blueTeam.indexOf(person)
      let player = new Player(person, 'Yes', 'Yes', 'Paid', 'Good', '1 year')
      const buttonBlue = document.createElement("button")
      const buttonRed = document.createElement("button")
      buttonBlue.innerHTML = 'Assign to Blue-Team'
      buttonRed.innerHTML = 'Assign to Red-Team'

      //add eventListeners for the Blue and Red Team Buttons:
      buttonBlue.addEventListener('click', function() {assignBlue(person, player),container.removeChild(liPlayer)})
      buttonRed.addEventListener('click', function() {assignRed(person, player),container.removeChild(liPlayer)})
        
      //Move the player to the List of Available Players 
      liPlayer.appendChild(buttonBlue)
      liPlayer.appendChild(buttonRed)
      liPlayer.appendChild(document.createTextNode(person.name + " - " +"ID #: " + person.id + " - " + "Player Age: " + person.age))
      container.append(liPlayer)
      
      listOfPlayers.push(player)
      arrOfPeople.splice(indexPerson, 1)
      blueTeam.splice(indexBlue, 1)
      redTeam.splice(indexRed, 1)

    console.log(player)
    //console.log(listOfPlayers)
    //console.log(indexPerson)
    //console.log(name, id, age)
    //console.log(`li ${id} was clicked!`)
  }

        //Assign a player to the Blue-Team
  const assignBlue = (person, player) => {
      let container = document.body.querySelector('#blue')
      let li = document.createElement('li')
      let bluePlayer = new BlueTeammate('Dolphin', 'Blue')
      let indexPerson=listOfPlayers.indexOf(person)
      let buttonRemove = document.createElement('button')
      buttonRemove.innerHTML = 'Remove from Blue-Team'
       
      //Create a button event that moves the selected player from the assigned team back to available players.
      buttonRemove.addEventListener('click', function() {makePlayer(person),container.removeChild(li)})
      
      blueTeam.push(bluePlayer)
      listOfPlayers.splice(indexPerson, 1)
      
      li.appendChild(buttonRemove)
      li.appendChild(document.createTextNode("Player Name: " + person.name + " - " +"Team Mascot: " + bluePlayer.mascot + " - " + "Player Color: " + bluePlayer.teamColor))
      container.append(li)

      console.log(blueTeam)
      console.log(bluePlayer)
      console.log(listOfPlayers)
  }

  const assignRed = (person, player) => {
    let container = document.body.querySelector('#red')
    let li = document.createElement('li')
    let redPlayer = new RedTeammate('Hawk', 'Red')
    let indexPerson=listOfPlayers.indexOf(person)
    let buttonRemove = document.createElement('button')
    buttonRemove.innerHTML = 'Remove from Red-Team'
     
    //Create a button event that moves the selected player from the assigned team back to available players.
    buttonRemove.addEventListener('click', function() {makePlayer(person),container.removeChild(li)})
    
    redTeam.push(redPlayer)
    listOfPlayers.splice(indexPerson, 1)
    
    li.appendChild(buttonRemove)
    li.appendChild(document.createTextNode("Player Name: " + person.name + " - " +"Team Mascot: " + redPlayer.mascot + " - " + "Player Color: " + redPlayer.teamColor))
    container.append(li)

    console.log(redTeam)
    console.log(redPlayer)
    console.log(listOfPlayers)
}