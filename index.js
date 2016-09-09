(function (window, document, undefined) {
  'use strict'

  var GoogleFontsBadge = {
    init: function (opts) {
      console.log('init', opts)
    },
    main: function (opts) {
      GoogleFontsBadge.init(opts)
    },
    remove: function () {
      console.log('remove')
    }
  }

  var gfBadge = function (opts) {
    GoogleFontsBadge.main.call(opts)
    return GoogleFontsBadge
  }

  if (typeof module === 'object' && typeof module.exports !== 'undefined') {
    module.exports = gfBadge
  } else {
    window.gfBadge = gfBadge
  }


}(window, document))
