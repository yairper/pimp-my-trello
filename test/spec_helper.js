const chai      = require('chai')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)

expect = chai.expect

sinon   = require('sinon')
sandbox = sinon.sandbox
stub    = sandbox.stub.bind(sandbox)
spy     = sandbox.spy.bind(sandbox)

const { JSDOM } = require('jsdom')
const dom       = new JSDOM('')

window   = dom.window
document = window.document
HTMLElement = window.HTMLElement

require('mutationobserver-shim')
MutationObserver = window.MutationObserver
MutationObserver._period = 0

require('require-dir')('../src/js')

bodyHas = element => {
  document.body.innerHTML = ''
  document.body.appendChild(element)
}
