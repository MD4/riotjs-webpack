import RiotControl from 'riotcontrol'

riot.mixin('controlMixin', {
  onControl(signal, func) {
    RiotControl.on(signal, func)
    this.on('unmount', () => RiotControl.off(signal, func))
  }
})
