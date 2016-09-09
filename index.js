(function (window, document, undefined) {
  'use strict'

  var doc = document
  var badgeParent = doc.body // TODO Allow an option to override this with a different node
  var badgeContainer = doc.createElement('div')
  var badgeInner = doc.createElement('div')
  var badgeStyles = doc.createElement('style')
  var svg = '<svg viewBox="0 0 175 54" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><clipPath id="a"><path d="M0 0h175v54H0z"/></clipPath><g fill-rule="nonzero" clip-path="url(#a)"><path d="M2.296 12.012H1.008V1.988h1.288l3.486 6.104h.056l3.486-6.104h1.288v10.024H9.324v-5.95l.056-1.68h-.056L6.188 9.884h-.756L2.296 4.382H2.24l.056 1.68v5.95zM13.142 9.912c0 .336.142.616.427.84.285.224.618.336 1.001.336.541 0 1.024-.201 1.449-.602.425-.402.637-.873.637-1.414-.401-.318-.961-.476-1.68-.476-.523 0-.959.126-1.309.378s-.525.564-.525.938zm1.666-4.984c.952 0 1.703.254 2.254.763.551.508.826 1.206.826 2.093v4.228h-1.232v-.952H16.6c-.532.784-1.241 1.176-2.128 1.176-.756 0-1.388-.224-1.897-.672a2.145 2.145 0 0 1-.763-1.68c0-.71.268-1.274.805-1.694.537-.42 1.253-.63 2.149-.63.765 0 1.395.14 1.89.42v-.294c0-.448-.177-.829-.532-1.141a1.824 1.824 0 0 0-1.246-.469c-.719 0-1.288.303-1.708.91l-1.134-.714c.625-.896 1.549-1.344 2.772-1.344zM22.324 11.06c.635 0 1.153-.229 1.554-.686.42-.458.63-1.055.63-1.792 0-.719-.21-1.312-.63-1.778a1.981 1.981 0 0 0-1.554-.7c-.616 0-1.134.233-1.554.7-.42.466-.63 1.059-.63 1.778 0 .728.21 1.32.63 1.778.42.466.938.7 1.554.7zm-.21 1.176c-.896 0-1.666-.355-2.31-1.064-.635-.719-.952-1.582-.952-2.59 0-1.008.317-1.872.952-2.59.644-.71 1.414-1.064 2.31-1.064.504 0 .964.107 1.379.322.415.214.735.499.959.854h.056l-.056-.952V1.988h1.288v10.024h-1.232v-.952h-.056a2.423 2.423 0 0 1-.959.854 2.965 2.965 0 0 1-1.379.322zM30.288 12.236c-1.008 0-1.839-.346-2.492-1.036-.653-.691-.98-1.564-.98-2.618 0-1.046.317-1.916.952-2.611.635-.696 1.447-1.043 2.436-1.043 1.017 0 1.827.329 2.429.987.602.658.903 1.579.903 2.765l-.014.14h-5.39c.019.672.243 1.213.672 1.624.429.41.943.616 1.54.616.821 0 1.465-.411 1.932-1.232l1.148.56a3.428 3.428 0 0 1-1.281 1.358c-.546.326-1.164.49-1.855.49zm-2.058-4.48h3.934a1.705 1.705 0 0 0-.581-1.183c-.35-.313-.819-.469-1.407-.469-.485 0-.903.149-1.253.448-.35.298-.581.7-.693 1.204zM41.418 12.236c-.504 0-.964-.108-1.379-.322a2.423 2.423 0 0 1-.959-.854h-.056v.952h-1.232V1.988h1.288v3.164l-.056.952h.056c.224-.355.544-.64.959-.854a2.953 2.953 0 0 1 1.379-.322c.905 0 1.671.354 2.296 1.064.644.718.966 1.582.966 2.59 0 1.017-.322 1.88-.966 2.59-.625.709-1.391 1.064-2.296 1.064zm-.21-1.176c.616 0 1.134-.234 1.554-.7.42-.458.63-1.05.63-1.778 0-.719-.21-1.312-.63-1.778-.42-.467-.938-.7-1.554-.7-.625 0-1.148.233-1.568.7-.411.466-.616 1.059-.616 1.778 0 .728.205 1.325.616 1.792.42.457.943.686 1.568.686zM58.572 1.876c.467 0 .849.079 1.148.238l-.35 1.134a1.667 1.667 0 0 0-.756-.168c-.317 0-.576.109-.777.329-.201.219-.301.511-.301.875v.868h1.792v1.176h-1.792v5.684h-1.288V6.328H54.96V5.152h1.288v-.994c0-.682.217-1.232.651-1.652.434-.42.992-.63 1.673-.63zM61.848 12.012H60.56v-6.86h1.232v1.12h.056c.131-.364.399-.675.805-.931.406-.257.805-.385 1.197-.385.373 0 .691.056.952.168L64.41 6.37c-.159-.066-.411-.098-.756-.098-.485 0-.908.196-1.267.588a1.967 1.967 0 0 0-.539 1.372v3.78zM67.308 2.786a.88.88 0 0 1-.266.644.878.878 0 0 1-.644.266.878.878 0 0 1-.644-.266.88.88 0 0 1-.266-.644c0-.252.089-.467.266-.644a.874.874 0 0 1 .644-.266c.252 0 .467.088.644.266a.878.878 0 0 1 .266.644zm-.266 2.366v6.86h-1.288v-6.86h1.288zM71.702 12.236c-1.008 0-1.839-.346-2.492-1.036-.653-.691-.98-1.564-.98-2.618 0-1.046.317-1.916.952-2.611.635-.696 1.447-1.043 2.436-1.043 1.017 0 1.827.329 2.429.987.602.658.903 1.579.903 2.765l-.014.14h-5.39c.019.672.243 1.213.672 1.624.429.41.943.616 1.54.616.821 0 1.465-.411 1.932-1.232l1.148.56a3.428 3.428 0 0 1-1.281 1.358c-.546.326-1.164.49-1.855.49zm-2.058-4.48h3.934a1.705 1.705 0 0 0-.581-1.183c-.35-.313-.819-.469-1.407-.469-.485 0-.903.149-1.253.448-.35.298-.581.7-.693 1.204zM76.126 5.152h1.232v.952h.056c.196-.336.497-.616.903-.84a2.587 2.587 0 0 1 1.267-.336c.84 0 1.486.24 1.939.721.453.48.679 1.164.679 2.051v4.312h-1.288V7.784c-.028-1.12-.593-1.68-1.694-1.68-.513 0-.943.207-1.288.623-.345.415-.518.912-.518 1.491v3.794h-1.288v-6.86zM86.794 11.06c.635 0 1.153-.229 1.554-.686.42-.458.63-1.055.63-1.792 0-.719-.21-1.312-.63-1.778a1.981 1.981 0 0 0-1.554-.7c-.616 0-1.134.233-1.554.7-.42.466-.63 1.059-.63 1.778 0 .728.21 1.32.63 1.778.42.466.938.7 1.554.7zm-.21 1.176c-.896 0-1.666-.355-2.31-1.064-.635-.719-.952-1.582-.952-2.59 0-1.008.317-1.872.952-2.59.644-.71 1.414-1.064 2.31-1.064.504 0 .964.107 1.379.322.415.214.735.499.959.854h.056l-.056-.952V1.988h1.288v10.024h-1.232v-.952h-.056a2.423 2.423 0 0 1-.959.854 2.965 2.965 0 0 1-1.379.322zM96.928 10.108c0 .597-.261 1.101-.784 1.512-.523.41-1.181.616-1.974.616-.691 0-1.297-.18-1.82-.539a2.973 2.973 0 0 1-1.12-1.421l1.148-.49c.168.41.413.73.735.959a1.79 1.79 0 0 0 1.057.343c.411 0 .754-.089 1.029-.266.275-.178.413-.388.413-.63 0-.439-.336-.761-1.008-.966l-1.176-.294c-1.335-.336-2.002-.98-2.002-1.932 0-.626.254-1.127.763-1.505.509-.378 1.16-.567 1.953-.567.607 0 1.155.144 1.645.434.49.289.833.676 1.029 1.162L95.668 7a1.442 1.442 0 0 0-.637-.679 1.99 1.99 0 0 0-.987-.245c-.336 0-.637.084-.903.252-.266.168-.399.373-.399.616 0 .392.369.672 1.106.84l1.036.266c1.363.336 2.044 1.022 2.044 2.058zM100.736 8.582c0-1.055.331-1.928.994-2.618.672-.691 1.517-1.036 2.534-1.036s1.857.345 2.52 1.036c.672.69 1.008 1.563 1.008 2.618 0 1.064-.336 1.936-1.008 2.618-.663.69-1.503 1.036-2.52 1.036-1.017 0-1.862-.346-2.534-1.036-.663-.691-.994-1.564-.994-2.618zm1.288 0c0 .737.215 1.334.644 1.792.429.457.961.686 1.596.686.635 0 1.167-.229 1.596-.686.429-.458.644-1.055.644-1.792 0-.728-.215-1.321-.644-1.778-.439-.467-.971-.7-1.596-.7-.625 0-1.157.233-1.596.7-.429.457-.644 1.05-.644 1.778zM111.982 1.876c.467 0 .849.079 1.148.238l-.35 1.134a1.667 1.667 0 0 0-.756-.168c-.317 0-.576.109-.777.329-.201.219-.301.511-.301.875v.868h1.792v1.176h-1.792v5.684h-1.288V6.328h-1.288V5.152h1.288v-.994c0-.682.217-1.232.651-1.652.434-.42.992-.63 1.673-.63zM51.738 5.152l-4.298 9.884h-1.33l1.596-3.458-2.828-6.426h1.4l2.044 4.928h.028l1.988-4.928h1.4z"/><g><path d="M108.233 36.989v9.246h-2.771V24.671h12.59v2.651h-9.819v7.077h8.855v2.59h-8.855zM119.255 38.857c0-2.269.713-4.147 2.138-5.632 1.446-1.486 3.263-2.229 5.452-2.229 2.188 0 3.995.743 5.421 2.229 1.446 1.485 2.168 3.363 2.168 5.632 0 2.289-.722 4.166-2.168 5.632-1.426 1.485-3.233 2.228-5.421 2.228-2.189 0-4.006-.743-5.452-2.228-1.425-1.486-2.138-3.364-2.138-5.632zm2.771 0c0 1.586.462 2.871 1.385 3.855.924.983 2.068 1.475 3.434 1.475 1.365 0 2.509-.492 3.433-1.475.924-.984 1.386-2.269 1.386-3.855 0-1.567-.462-2.842-1.386-3.825-.944-1.004-2.088-1.506-3.433-1.506-1.346 0-2.49.502-3.434 1.506-.923.983-1.385 2.258-1.385 3.825zM136.663 31.478h2.65v2.048h.121c.421-.723 1.069-1.325 1.942-1.807.874-.482 1.782-.723 2.726-.723 1.807 0 3.198.517 4.171 1.551.974 1.034 1.461 2.505 1.461 4.412v9.276h-2.771V37.14c-.06-2.41-1.275-3.614-3.644-3.614-1.104 0-2.028.447-2.771 1.34-.743.893-1.114 1.963-1.114 3.208v8.161h-2.771V31.478zM158.277 46.476c-1.205 0-2.204-.371-2.997-1.114-.793-.743-1.2-1.777-1.22-3.102v-8.252h-2.59v-2.53h2.59V26.96h2.771v4.518h3.614v2.53h-3.614v7.348c0 .984.191 1.652.572 2.003.382.352.813.527 1.295.527a2.8 2.8 0 0 0 .648-.075c.211-.05.406-.116.587-.196l.874 2.47c-.723.261-1.567.391-2.53.391zM173.941 42.139c0 1.285-.562 2.37-1.687 3.253-1.124.884-2.54 1.325-4.246 1.325-1.486 0-2.791-.386-3.916-1.159a6.395 6.395 0 0 1-2.409-3.057l2.47-1.054c.361.883.888 1.571 1.581 2.063a3.84 3.84 0 0 0 2.274.738c.883 0 1.621-.191 2.213-.573.593-.381.889-.833.889-1.355 0-.944-.723-1.636-2.169-2.078l-2.53-.632c-2.871-.723-4.306-2.109-4.306-4.157 0-1.345.547-2.424 1.641-3.237 1.094-.814 2.495-1.22 4.201-1.22 1.305 0 2.485.311 3.539.934 1.054.622 1.792 1.455 2.214 2.499l-2.47 1.024c-.281-.622-.738-1.109-1.37-1.46-.633-.352-1.34-.527-2.123-.527-.723 0-1.371.18-1.943.542-.572.361-.858.803-.858 1.325 0 .843.793 1.445 2.379 1.807l2.229.572c2.931.723 4.397 2.199 4.397 4.427zM.17 34.368c0-6.807 5.723-12.349 12.53-12.349 3.765 0 6.445 1.476 8.463 3.404l-2.379 2.379c-1.446-1.355-3.404-2.409-6.084-2.409-4.97 0-8.855 4.005-8.855 8.975s3.885 8.976 8.855 8.976c3.222 0 5.06-1.296 6.234-2.47.964-.964 1.597-2.35 1.838-4.247H12.7v-3.373h11.354c.121.602.181 1.325.181 2.108 0 2.53-.693 5.662-2.921 7.891-2.169 2.259-4.94 3.464-8.614 3.464-6.807 0-12.53-5.542-12.53-12.349M33.412 43.585c-2.41 0-4.488-1.988-4.488-4.819 0-2.861 2.078-4.819 4.488-4.819 2.409 0 4.488 1.958 4.488 4.819 0 2.831-2.079 4.819-4.488 4.819m0-12.77c-4.398 0-7.982 3.343-7.982 7.951 0 4.578 3.584 7.951 7.982 7.951 4.397 0 7.981-3.373 7.981-7.951 0-4.608-3.584-7.951-7.981-7.951M50.824 43.585c-2.409 0-4.488-1.988-4.488-4.819 0-2.861 2.079-4.819 4.488-4.819 2.409 0 4.488 1.958 4.488 4.819 0 2.831-2.079 4.819-4.488 4.819m0-12.77c-4.398 0-7.982 3.343-7.982 7.951 0 4.578 3.584 7.951 7.982 7.951 4.397 0 7.982-3.373 7.982-7.951 0-4.608-3.585-7.951-7.982-7.951M68.19 43.585c-2.409 0-4.428-2.018-4.428-4.789 0-2.801 2.019-4.849 4.428-4.849 2.379 0 4.247 2.048 4.247 4.849 0 2.771-1.868 4.789-4.247 4.789m4.006-12.289v1.296h-.121c-.783-.934-2.289-1.777-4.186-1.777-3.976 0-7.62 3.493-7.62 7.981 0 4.458 3.644 7.921 7.62 7.921 1.897 0 3.403-.843 4.186-1.807h.121v1.145c0 3.042-1.627 4.668-4.247 4.668-2.138 0-3.464-1.536-4.006-2.831l-3.042 1.265c.874 2.108 3.193 4.699 7.048 4.699 4.096 0 7.56-2.41 7.56-8.283V31.296h-3.313zM77.918 22.863h3.494v23.372h-3.494zM90.719 33.887c1.386-.001 2.56.692 2.952 1.686l-7.108 2.951c-.091-3.072 2.379-4.638 4.156-4.638m.271 9.699c-1.777-.001-3.042-.813-3.855-2.41l10.632-4.398-.361-.903c-.663-1.777-2.681-5.06-6.807-5.06-4.097 0-7.5 3.224-7.5 7.951 0 4.459 3.373 7.953 7.891 7.953 3.644-.001 5.753-2.23 6.626-3.525l-2.71-1.807c-.904 1.325-2.139 2.198-3.916 2.198"/></g></g></svg>'
  badgeContainer.id = 'js-GoogleFontsBadge'
  badgeContainer.className = 'GoogleFontsBadge'
  badgeInner.className = 'GoogleFontsBadge-inner'
  badgeInner.innerHTML = svg
  badgeStyles.id = 'js-GoogleFontsBadgeStyles'
  badgeStyles.innerHTML = '.GoogleFontsBadge { transform: translateY(100%); position: fixed; bottom: 0; width: 100%; transition: transform 0.2s; } .GoogleFontsBadge__scroll { transform: translateY(100%) } .GoogleFontsBadge__top { transform: translateY(0) } .GoogleFontsBadge-inner {  background: black; fill: white; color: white; padding: 1.5rem; } .GoogleFontsBadge-inner svg { max-width: 175px; } @media (min-width: 1024px) { .GoogleFontsBadge-inner { background: transparent; fill: black; } .GoogleFontsBadge__scroll { transform: translateY(0); } }'
  badgeContainer.appendChild(badgeInner)

  var GoogleFontsBadge = {
    init: function (opts) {
      badgeParent.appendChild(badgeContainer)
      doc.head.appendChild(badgeStyles)

      doc.addEventListener('touchmove', ScrollStart, false)
      doc.addEventListener('scroll', Scroll, false)

      console.log('scrolltop', badgeParent.scrollTop)

      // Hide by default, show if at the top on load
      if (badgeParent.scrollTop === 0) {
        badgeContainer.classList.add('GoogleFontsBadge__top')
        // badgeContainer.style.transform = 'translateY(0)'
      }

      function ScrollStart() {
        console.log('start, hide')
      }

      function Scroll() {
        if (badgeParent.scrollTop > 0) {
          badgeContainer.classList.add('GoogleFontsBadge__scroll')
          badgeContainer.classList.remove('GoogleFontsBadge__top')
          // badgeContainer.style.transform = 'translateY(100%)'
        } else {
          badgeContainer.classList.remove('GoogleFontsBadge__scroll')
          badgeContainer.classList.add('GoogleFontsBadge__top')
          // badgeContainer.style.transform = 'translateY(0)'
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
