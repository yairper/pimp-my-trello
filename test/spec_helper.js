const chai      = require('chai')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)

expect = chai.expect

const sinon = require('sinon')
sandbox = sinon.sandbox
stub = sandbox.stub.bind(sandbox)
spy  = sandbox.spy.bind(sandbox)

const { JSDOM } = require('jsdom')
const dom       = new JSDOM('')

window   = dom.window
document = window.document

require('mutationobserver-shim')
MutationObserver = window.MutationObserver

require('require-dir')('../src/js')

bodyHas = element => {
  document.body.innerHTML = ''
  document.body.appendChild(element)
}
