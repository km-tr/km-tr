'use strict'
const React = require('react')
const { Text } = require('ink')
const SelectInput = require('ink-select-input')
const opn = require('opn')

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
  {
    label: '???',
    url: 'https://ququlo.com',
  },
]

module.exports = () => (
  <div>
    <br />
    <div>
      <Text>I’m a Web and React Native developer.</Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
)
