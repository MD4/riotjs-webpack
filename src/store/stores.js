import RiotControl from 'riotcontrol'
import blog from './BlogStore'

const stores = { blog }

Object
  .keys(stores)
  .forEach(storeName => RiotControl.addStore(stores[ storeName ]))

export default stores
