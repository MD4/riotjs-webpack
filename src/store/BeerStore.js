import dataBeers from '../res/data'

class BeerStore {
  constructor() {
    riot.observable(this)

    this.initData()

    this.on(riot.events.beer.view.LOAD_BEERS, () => {
      this.trigger(riot.events.beer.store.BEERS_CHANGED, this._beers)
    })

    this.on(riot.events.beer.view.LOAD_BEER, (beerId) => {
      console.log(beerId)
      this.trigger(riot.events.beer.store.BEER_CHANGED, this.getBeerById(beerId + ''))
    })

    this.on(riot.events.beer.view.RESET_DATA, () => {
      this.initData()
      this.trigger(riot.events.beer.store.BEERS_CHANGED, this._beers)
    })

    this.on(riot.events.beer.view.LIKE_BEER, id => {
      this._beers.forEach(beer => {
        if (beer.beerId === id) {
          beer.likes = beer.likes + 1
        }
      })
      this.trigger(riot.events.beer.store.BEERS_CHANGED, this._beers)
    })
  }

  initData() {
    // Quick and dirty way to clone beers array
    this._beers = JSON.parse(JSON.stringify(dataBeers))
  }

  getBeerById(beerId) {
    return this._beers.filter(beer => beer.id === beerId)[ 0 ]
  }
}

export default new BeerStore()
