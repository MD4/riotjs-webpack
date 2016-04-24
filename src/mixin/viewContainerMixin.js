riot.mixin('viewContainerMixin', {
  currentView: null,

  loadView(viewName, data) {
    if (this._currentView) {
      this._currentView.unmount(true)
    }
    console.log('loadView', viewName, data)
    this._currentView = riot.mount(this.container, viewName, data)[ 0 ]
  }
})
