import React from 'react'
import { style } from 'next/css'

const styles = {
  wrapper: style({
    display: 'block',
  }),
  text: style({
    fontSize: 'calc(18px + 2vw)',
    display: 'block',
    whiteSpace: 'pre',
    color: 'white',
  }),
}

export default (props) => (
  <div className={styles.wrapper}>
    <div className={styles.text}>{props.firstText}</div>
    {
      props.link ?
      <a className={styles.text} href={props.link.href} target='_blank'>{props.link.text}</a> :
      null
    }
    <div className={styles.text}>{props.secondText}</div>
  </div>
)
