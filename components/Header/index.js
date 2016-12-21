import React from 'react'
import { style } from 'next/css'

const styles = style({
  fontSize: 'calc(16px + 8vw)',
  margin: '0 ',
  padding: '1rem 0 0',
  display: 'block',
})

export default (props) => (
  <span className={styles}>{props.children}</span>
)
