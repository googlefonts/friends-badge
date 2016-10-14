/* eslint-env node, browser, qunit */
var libraryID = 'js-GoogleFontsBadge';
var libraryStylesID = 'js-GoogleFontsBadgeStyles';

QUnit.testStart(function(testDetails) {
  // console.log('start', testDetails)
});

QUnit.test('test exists', function() {
  // eslint-disable-next-line no-undef
  QUnit.assert.ok(Boolean(gfBadge));
  QUnit.assert.ok(Boolean(window.gfBadge));
});

QUnit.test('parent div exists after initialising', function() {
  QUnit.assert.ok(!document.getElementById(libraryID));
  window.gfBadge();
  QUnit.assert.ok(document.getElementById(libraryID));
  QUnit.done(function() {
    window.gfBadge().remove();
  });
});

QUnit.test('remove after initialising', function() {
  window.gfBadge();
  QUnit.assert.ok(document.getElementById(libraryID));
  window.gfBadge().remove();
  QUnit.assert.ok(!document.getElementById(libraryID));
});

QUnit.test('remove styles after initialising', function() {
  window.gfBadge();
  QUnit.assert.ok(document.getElementById(libraryStylesID));
  window.gfBadge().remove();
  QUnit.assert.ok(!document.getElementById(libraryStylesID));
});

// QUnit.test('initialise into parent node', function () {
//   var fixture = document.getElementById('qunit-fixture')
//   QUnit.assert.ok(!fixture.querySelector('#' + libraryID))
//   window.gfBadge(fixture)
//   QUnit.assert.ok(fixture.querySelector('#' + libraryID))
//   QUnit.done(function () {
//     window.gfBadge(fixture).remove()
//   })
// })

// TODO Test can click through `.GoogleFontsBadge` but can still click anchor
// TODO Test should have some kind of ARIA description or fallback content in the SVG
