'use strict';

angular.module('watcher-exp', [])
.service('watcherExp', [function() {
  return function watcherExp(watcher) {
    if (!watcher.exp) throw('watcherExp: no exp');
    if (!angular.isFunction(watcher.exp)) {
      if (watcher.parts) {
        if (watcher.parts[1]) {
          throw ('watcherExp: to many parts');
        } else {
          return watcher.parts[0].exp;
        }
      } else {
        return watcher.exp;
      }
    }
    return watcherExp(watcher.exp);
  }
}])
;
