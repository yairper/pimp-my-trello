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

$ = require('jQuery')

require('../src/js/zepto_extensions')
require('../src/js/builder')
require('../src/js/helpers')

require('../src/js/cards_list_observer')
require('../src/js/tags_list')
require('../src/js/card')
require('../src/js/cards_list')
require('../src/js/board')
require('../src/js/content')

bodyHas = $.fn.html.bind($('body'))