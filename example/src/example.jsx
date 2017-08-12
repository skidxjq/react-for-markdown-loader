import React from 'react'
import ReactDOM from 'react-dom'
import Example from './example.md'
import 'highlight.js/styles/github.css'
import 'github-markdown-css'

const root = document.querySelector('#root')
ReactDOM.render((
  <Example />
), root)