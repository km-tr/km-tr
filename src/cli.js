#!/usr/bin/env node
'use strict'
const React = require('react')
const path = require('path')
const meow = require('meow')
const termImg = require('term-img')
const terminalImage = require('terminal-image')
const importJsx = require('import-jsx')
const { render } = require('ink')

const Ui = require('./ui')

meow(`
	Usage
	  $ km-tr
`)

const fallback = async () => {
  const image = await terminalImage.file(path.join(__dirname, 'avatar.png'))
  console.log(image)
}

termImg(path.join(__dirname, 'avatar.png'), { fallback })

render(<Ui />)
