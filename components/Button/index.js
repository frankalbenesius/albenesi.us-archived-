import React from 'react'
import { style } from 'next/css'

const styles = style({
  outline: '0',
  border: '2px solid white',
  borderRadius: '4px',
  background: 'none',
  fontSize: '50%',
  padding: '0.1rem 0.8rem',
  display: 'block',
  margin: '1rem auto 3rem',
})

export default (props) => (
  <button className={styles} onClick={props.onClick}>{props.children}</button>
)
