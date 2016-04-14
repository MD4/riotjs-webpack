import RiotControl from 'riotcontrol'

// store events
riot.SE = {
  POSTS_CHANGED: 'se_posts_changed'
}

// view events
riot.VE = {
  RESET_DATA: 've_reset_data',
  LIKE_POST: 've_like_post',
  LOAD_POSTS: 've_load_posts'
}

// register global tag mixin for using RiotControl
riot.mixin('controlMixin', {
  onControl(signal, func) {
    RiotControl.on(signal, func)
    this.on('unmount', () => RiotControl.off(signal, func))
  }
})
