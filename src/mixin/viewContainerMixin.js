riot.mixin('viewContainerMixin', {
  _currentView: null,
  _currentViewName: null,

  loadView(viewName, data) {
    if (this._currentViewName === viewName) return;
    if (this._currentView) {
      this._currentView.unmount(true)
    }
    this._currentView = riot.mount(this.container, viewName, data)[ 0 ]
    this._currentViewName = viewName;
  }
})
