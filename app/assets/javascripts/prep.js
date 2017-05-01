// Hoisting

function hoisting() {
  console.log(a)
  console.log(daHoist())

  var a = "a"
  function daHoist() {
    return "now hoisting"
  }
}

console.log(hoisting())
// undefined
// "now hoisting""


function hoisting() {
  var a;
  function daHoist() {
    return "now hoisting"
  }

  console.log(a)
  console.log(daHoist())

  a = "a"
}

function hoisting() {
  console.log(a)
  console.log(daHoist())

  var a = "a"
  var daHoist = function() {
    return "now hoisting"
  }
}

function hoisting() {
  var a;
  var daHoist ;
  console.log(a)
  console.log(daHoist())

  a = "a"
  daHoist = function() {
    return "now hoisting"
  }
}

hoisting()
// undefined
// typeError


// What is "this"?

var username = "megaman"
var gameCharacter = {
  username: "mario",
  properties: {
    username: "link",
    getUsername: function() {
      return this.username;
    }
  }
};

console.log(gameCharacter.properties.getUsername()); // "link"
var characterName = gameCharacter.properties.getUsername;
console.log(characterName()); // "megaman"
