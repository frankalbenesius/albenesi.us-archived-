import React from 'react'
import { style } from 'next/css'

const styles = style({
  fontSize: 'calc(16px + 4vw)',
  display: 'block',
})

export default (props) => (
  <span className={styles}>{props.children}</span>
)
