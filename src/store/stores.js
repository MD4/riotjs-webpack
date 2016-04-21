import RiotControl from 'riotcontrol'
import beer from './BeerStore'
import route from './RouteStore'

const stores = { beer, route }

Object
  .keys(stores)
  .forEach(storeName => RiotControl.addStore(stores[ storeName ]))

export default stores
