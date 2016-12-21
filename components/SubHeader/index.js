import React from 'react'
import { style } from 'next/css'

const styles = style({
  fontSize: '70%',
  display: 'block',
})

export default (props) => (
  <span className={styles}>{props.children}</span>
)
