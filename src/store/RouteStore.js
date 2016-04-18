import RiotControl from 'riotcontrol'

class RouteStore {

  constructor() {
    riot.observable(this)

    riot.route(this.onRoute)

    this.on(riot.events.route.view.GOTO, (route) => {
      window.location.hash = route
    })
  }

  onRoute(view, data) {
    console.log('onRoute', arguments)
    RiotControl.trigger(riot.events.route.store.ROUTE_CHANGED, view, data)
  }

  start() {
    riot.route.start(true)
  }

}

export default new RouteStore()
