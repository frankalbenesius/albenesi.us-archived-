import React from 'react'
import { style } from 'next/css'

const styles = style({
  outline: '0',
  border: '2px solid white',
  borderRadius: '4px',
  background: 'none',
  fontSize: 'calc(16px + 4vw)',
  padding: '0.1rem 0.8rem',
  display: 'block',
  margin: '1rem auto 3rem',
})

export default (props) => (
  <button className={styles} onClick={props.onClick}>{props.children}</button>
)
