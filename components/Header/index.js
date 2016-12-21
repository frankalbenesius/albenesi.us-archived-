import React from 'react'
import { style } from 'next/css'

const styles = style({
  fontSize: '100%',
  margin: '0',
  padding: '0',
  display: 'block',
})

export default (props) => (
  <span className={styles}>{props.children}</span>
)
