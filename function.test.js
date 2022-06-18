global.td = require('testdouble')
require('testdouble-jest')(td, jest)
describe('Testing TDD',()=>{
    beforeEach(() => {
        td.mock('./func')
        subject = foo
      })
    test('using testdouble',()=>{
        const func = require('./func')
        td.when(func(0)).thenReturn(['TDD'])
        const result = subject()
        expect(result.func).toEqual(['TDD'])
    })
})

const func = require('./func')
function foo () {
  return {
    func: func(0),
  }
}