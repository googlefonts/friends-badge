var libraryID = 'js-GoogleFontsBadge'
var libraryStylesID = 'js-GoogleFontsBadgeStyles'

QUnit.testStart(function (testDetails) {
  // console.log('start', testDetails)
})

QUnit.test('test exists', function () {
  QUnit.assert.ok(!!gfBadge)
  QUnit.assert.ok(!!window.gfBadge)
})

QUnit.test('parent div exists after initialising', function () {
  QUnit.assert.ok(!document.getElementById(libraryID))
  gfBadge()
  QUnit.assert.ok(document.getElementById(libraryID))
  QUnit.done(function () {
    gfBadge().remove()
  })
})

QUnit.test('remove after initialising', function () {
  gfBadge()
  QUnit.assert.ok(document.getElementById(libraryID))
  gfBadge().remove()
  QUnit.assert.ok(!document.getElementById(libraryID))
})

QUnit.test('remove styles after initialising', function () {
  gfBadge()
  QUnit.assert.ok(document.getElementById(libraryStylesID))
  gfBadge().remove()
  QUnit.assert.ok(!document.getElementById(libraryStylesID))
})

// QUnit.test('initialise into parent node', function () {
//   var fixture = document.getElementById('qunit-fixture')
//   QUnit.assert.ok(!fixture.querySelector('#' + libraryID))
//   gfBadge(fixture)
//   QUnit.assert.ok(fixture.querySelector('#' + libraryID))
//   QUnit.done(function () {
//     gfBadge(fixture).remove()
//   })
// })
