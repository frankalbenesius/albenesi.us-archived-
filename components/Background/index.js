import React from 'react'
import css from 'next/css'

css.global('html, body', { height: '100%', margin: '0', padding: '0' })
css.global('*', { boxSizing: 'border-box' , fontFamily: '"Patua One", cursive'})
css.global('#__next', { height: '100%' })

const styles = {
  imageWrapper: css({
    fontFamily: '"Patua One", cursive',
    height: '100%',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '10vw',
    '@media(min-width: 960px)': {
      fontSize: '6rem',
    },
  }),
}

const Background = (props) => {
  const backgroundImage = css({
    backgroundImage: `url(static/img/${props.image})`
  })
  return (
    <div className={`${styles.imageWrapper} ${backgroundImage}`}>
      {props.children}
    </div>
  )
}

export default Background
