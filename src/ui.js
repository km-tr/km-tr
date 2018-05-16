'use strict'
const path = require('path')
const { h, Text } = require('ink')
const SelectInput = require('ink-select-input')
const opn = require('opn')
const terminalImage = require('terminal-image')

const open = url => opn(url, { wait: false })

const handleSelect = item => {
  if (item.url) {
    open(item.url)
  }

  if (item.action) {
    item.action()
  }
}

const items = [
  {
    label: 'GitHub',
    url: 'https://github.com/km-tr',
  },
  {
    label: 'Blog',
    url: 'https://www.kumagai.tokyo',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/beer.with.sushi',
  },
  {
    label: 'Sketchfab',
    url: 'https://sketchfab.com/kmgi',
  },
  {
    label: 'Quit',
    action() {
      process.exit()
    },
  },
]

module.exports = () => (
  <div>
    <br />
    <div>
      <Text>I’m a Web developer in Roppongi.</Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
)
