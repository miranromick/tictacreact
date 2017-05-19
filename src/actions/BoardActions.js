import Dispatcher from '../dispatchers/Dispatcher'
export function squareClickAction(index, player){
  Dispatcher.dispatch({
    type: 'SQUARE_SET',
    index: index,
    player: player
  })
}
