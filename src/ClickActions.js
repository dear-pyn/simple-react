import AppDispatcher from './AppDispatcher.js'
import { INCREMENT_CLICK } from './ClickStore.js'

const ClickActions = {
  increment() {
    AppDispatcher.handleViewAction({
      actionType: INCREMENT_CLICK
    })
  }
}

export default ClickActions
