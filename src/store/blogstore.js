import RiotControl from 'riotcontrol'

const LOCALSTORAGE_KEY = 'riot-webpack-demo'

class BlogStore {
  constructor() {
    riot.observable(this)

    const json = window.localStorage.getItem(LOCALSTORAGE_KEY)
    if (!json) {
      this.initData()
    } else {
      this._posts = (json && JSON.parse(json)) || []
    }
  }

  getPostById(id) {
    return this._posts.filter(post => post.postId === id)[ 0 ]
  }

  initData() {
    this._posts = [
      {
        postId: 1, title: 'Best xbox games', content: 'Halo, GOW',
        category: 'collection', likes: 10
      },
      {
        postId: 2, title: 'Best ps games', content: 'Uncharted, The Last of US',
        category: 'collection', likes: 20
      },
      {
        postId: 3, title: 'Best wii games', content: 'Zelda, Mario',
        category: 'collection', likes: 16
      },
      {
        postId: 4, title: 'Review of Halo', content: 'yes, cortana',
        category: 'review', likes: 11
      },
      {
        postId: 5, title: 'Review of Titanfall', content: 'where is the local game?',
        category: 'review', likes: 7
      },
      {
        postId: 6, title: 'Review of portal', content: 'I don\'t blame you',
        category: 'review', likes: 40
      },
      {
        postId: 7, title: 'Best wii games', content: 'Zelda, Mario',
        category: 'lol', likes: 146
      },
      {
        postId: 8, title: 'Review of Halo', content: 'yes, cortana',
        category: 'review', likes: 311
      },
      {
        postId: 9, title: 'Review of Titanfall', content: 'where is the local game?',
        category: 'review', likes: 27
      },
      {
        postId: 10, title: 'Review of portal', content: 'I don\'t blame you',
        category: 'collection', likes: 140
      }
    ]
    this.saveToStorage()
  }

  saveToStorage() {
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this._posts))
  }
}

const instance = new BlogStore()

instance.on(riot.VE.LOAD_POSTS, () => {
  instance.trigger(riot.SE.POSTS_CHANGED, instance._posts)
})

instance.on(riot.VE.RESET_DATA, () => {
  instance.initData()
  instance.trigger(riot.SE.POSTS_CHANGED, instance._posts)
})

instance.on(riot.VE.LIKE_POST, id => {
  instance._posts.forEach(post => {
    if (post.postId === id) {
      post.likes = post.likes + 1
    }
  })
  instance.saveToStorage()
  instance.trigger(riot.SE.POSTS_CHANGED, instance._posts)
})

// register to riot control by myself
RiotControl.addStore(instance)

export default instance
