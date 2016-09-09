(function (window, document, undefined) {
  'use strict'

  var doc = document
  var badgeParent = doc.body // TODO Allow an option to override this with a different node
  var badgeContainer = doc.createElement('div')
  badgeContainer.id = 'js-GoogleFontsBadge'
  badgeContainer.innerHTML = 'Friends of Google Fonts'

  var GoogleFontsBadge = {
    init: function (opts) {
      badgeParent.appendChild(badgeContainer)
    },
    main: function (opts) {
      GoogleFontsBadge.init(opts)
    },
    remove: function () {
      badgeParent.removeChild(badgeContainer)
    }
  }

  var gfBadge = function (opts) {
    GoogleFontsBadge.main.call(opts)
    return GoogleFontsBadge
  }

  if (typeof module === 'object' && typeof module.exports !== 'undefined') {
    module.exports = gfBadge
  } else {
    if (window && document) {
      window.gfBadge = gfBadge
    }
  }

}(window, document))
