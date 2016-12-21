import React from 'react'
import css from 'next/css'
import color from 'Color'

css.global('html, body', { height: '100%', margin: '0', padding: '0' })
css.global('*', { boxSizing: 'border-box' , fontFamily: '"Patua One", cursive'})
css.global('#__next', { height: '100%' })

const saturation = '100%'
const lightness = '20%'
const opacity = 0.7

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
  const hslColor = `hsla(${props.hue}, ${saturation}, ${lightness}, ${opacity})`
  const backgroundColor = css({
    backgroundColor: hslColor,
    height: '100%',
  })
  return (
    <div className={`${styles.imageWrapper} ${backgroundImage}`}>
      <div className={backgroundColor}>
        {props.children}
      </div>
    </div>
  )
}

export default Background
