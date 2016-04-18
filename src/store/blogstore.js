import dataPosts from '../res/data'

class BlogStore {
  constructor() {
    riot.observable(this)

    this.initData()

    this.on(riot.events.blog.view.LOAD_POSTS, () => {
      this.trigger(riot.events.blog.store.POSTS_CHANGED, this._posts)
    })

    this.on(riot.events.blog.view.RESET_DATA, () => {
      this.initData()
      this.trigger(riot.events.blog.store.POSTS_CHANGED, this._posts)
    })

    this.on(riot.events.blog.view.LIKE_POST, id => {
      this._posts.forEach(post => {
        if (post.postId === id) {
          post.likes = post.likes + 1
        }
      })
      this.trigger(riot.events.blog.store.POSTS_CHANGED, this._posts)
    })
  }

  initData() {
    // Quick and dirty way to clone posts array
    this._posts = JSON.parse(JSON.stringify(dataPosts))
  }

  getPostById(id) {
    return this._posts.filter(post => post.postId === id)[ 0 ]
  }
}

export default new BlogStore()
