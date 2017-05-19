import {EventEmitter} from 'events'

class Players extends EventEmitter{
  constructor(){
    super()
    this.players = ["X", "O"]
    this.currentPlayerIndex = 0
  }
  currentPlayer(){
    return this.players[this.currentPlayerIndex]
  }
  changePlayer(){
    trueOrFalsePart ? trueValue : false/value
  }
  handleAction(action){
    switch(action.type){
      case('SQUARE_SET'):{
        this.changePlayer()
      }
    }
  }
}

export default new Players()
