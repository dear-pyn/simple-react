import AppDispatcher from './AppDispatcher.js'
import EventEmitter from 'events'
const INCREMENT_CLICK = 'increment_click'
const CHANGE_EVENT = 'change'

let clickCount = 0

const ClickStore = Object.assign(new EventEmitter(), {
  getClickCount() {
    return clickCount
  },
  emitChange() {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
})

AppDispatcher.register(payload => {
  const action = payload.action
  switch(action.actionType) {
      case INCREMENT_CLICK:
        clickCount++
        ClickStore.emitChange()
        break
      default:
        break
  }
})

export default ClickStore
export { INCREMENT_CLICK }
