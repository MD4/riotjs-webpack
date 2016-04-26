import Mappersmith from 'mappersmith'

export default Mappersmith.forge({
  host: 'https://bebeer.herokuapp.com/',
  resources: {
    Beer: {
      all: { path: '/beers' },
      byId: { path: '/beers/{id}' }
    }
  }
})
