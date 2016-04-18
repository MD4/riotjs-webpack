import RiotControl from 'riotcontrol'
import blog from './BlogStore'
import route from './RouteStore'

const stores = { blog, route }

Object
  .keys(stores)
  .forEach(storeName => RiotControl.addStore(stores[ storeName ]))

export default stores
