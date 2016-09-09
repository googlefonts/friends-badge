QUnit.test('test exists', function() {
  QUnit.assert.ok(!!gfBadge)
  QUnit.assert.ok(!!window.gfBadge)
})

QUnit.test('init exists', function() {
  QUnit.assert.ok(!!gfBadge().init)
})

QUnit.test('remove exists', function() {
  QUnit.assert.ok(!!gfBadge().remove)
})
