import { Dispatcher } from 'flux'

const AppDispatcher = Object.assign(new Dispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action
    })
  }
})

export default AppDispatcher
