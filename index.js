(function (window, document, undefined) {
  'use strict'

  var doc = document
  var badgeParent = doc.body // TODO Allow an option to override this with a different node
  var badgeContainer = doc.createElement('div')
  var badgeStyles = doc.createElement('style')
  badgeContainer.id = 'js-GoogleFontsBadge'
  badgeContainer.className = 'GoogleFontsBadge'
  badgeContainer.innerHTML = 'Friends of Google Fonts'
  badgeStyles.id = 'js-GoogleFontsBadgeStyles'
  badgeStyles.innerHTML = '.GoogleFontsBadge { background: black; color: white; padding: 1em; position: fixed; bottom: 0; width: 100%; transition: transform 0.2s; }'

  var GoogleFontsBadge = {
    init: function (opts) {
      badgeParent.appendChild(badgeContainer)
      doc.head.appendChild(badgeStyles)

      doc.addEventListener('touchmove', ScrollStart, false);
      doc.addEventListener('scroll', Scroll, false);

      function ScrollStart() {
        console.log('start, hide')
      }

      function Scroll() {
        if (badgeParent.scrollTop > 0) {
          // badgeContainer.classList.add('js-scrolling')
          badgeContainer.style.transform = 'translateY(100%)'
        } else {
          // badgeContainer.classList.remove('js-scrolling')
          badgeContainer.style.transform = 'translateY(0)'
        }
      }

    },
    main: function (opts) {
      GoogleFontsBadge.init(opts)
    },
    remove: function () {
      badgeParent.removeChild(badgeContainer)
      doc.head.removeChild(badgeStyles)
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
