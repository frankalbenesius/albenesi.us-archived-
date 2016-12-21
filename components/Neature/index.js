import React from 'react'
import { style } from 'next/css'

const styles = style({
  fontSize: '40%',
  display: 'block',
  whiteSpace: 'pre',
  color: 'white',
})

export default (props) => (
  <div>
    <div className={styles}>{props.firstText}</div>
    {
      props.link ?
      <a className={styles} href={props.link.href} target='_blank'>{props.link.text}</a> :
      null
    }
    <div className={styles}>{props.secondText}</div>
  </div>
)
