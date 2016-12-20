import React from 'react'
import Head from 'next/head'
import 'glamor/reset'
import css from 'next/css'

css.global('html, body', { height: '100%', margin: '0', padding: '0' })
css.global('#__next', { height: '100%' })
const maxWidth = '960px'
const styles = {
  imageWrapper: css({
    fontFamily: '"Patua One", cursive',
    fontSize: '10vw',
    '@media(min-width: 960px)': {
      fontSize: '6rem',
    },
    height: '100%',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    color: 'white',
  }),
  header: css({
    fontFamily: '"Patua One", cursive',
    fontSize: '100%',
    margin: '1rem 2rem 0',
    textAlign: 'center',
  }),
  subheader: css({
    fontFamily: '"Patua One", cursive',
    fontSize: '50%',
    margin: '0 1rem 1rem',
    textAlign: 'center',
  }),
  button: css({
    fontFamily: '"Patua One", cursive',
    padding: '0.1em 0.3em',
    outline: '0',
    border: '2px solid white',
    borderRadius: '4px',
    background: 'none',
    fontSize: '50%',
    margin: '0 auto',
    display: 'block',
  }),
}

const neatures = [
  {
    text: 'he is neater than whiskey off the rocks',
    image: 'whiskey.jpg',
  },
  {
    text: 'he made a podcast called That\'s Pretty Neat with his neat pals',
    image: 'podcast.jpg',
  },
]

const selectRandomNeature = (skip) => {
  const randomIndex = Math.floor(Math.random() * (neatures.length));
  if (skip && neatures[randomIndex].text === skip.text) {
    if (randomIndex === (neatures.length - 1)) {
      return neatures[0] // back to first neature!
    }
    return neatures[randomIndex + 1] // don't show the same neature twice, jeez
  }
  return neatures[randomIndex] // random neature!
}

class Index extends React.Component {
  static getInitialProps () {
    return { neature: selectRandomNeature() }
  }
  constructor(props) {
    super(props)
    this.state = { neature: props.neature }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      neature: selectRandomNeature(this.state.neature)
    })
  }
  render() {
    const backgroundImage = css({
      backgroundImage: `url(static/img/${this.state.neature.image})`
    })
    return (
      <div className={`${styles.imageWrapper} ${backgroundImage}`}>
        <Head>
          <title>FRANK ALBENESIUS</title>
          <meta name="description" content="Personal website for Frank Albenesius" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/css?family=Patua+One|Roboto" rel="stylesheet" />
        </Head>
        <h1 className={styles.header}>Frank Albenesius</h1>
        <h2 className={styles.subheader}>is a super neat guy</h2>
        <button className={styles.button} onClick={this.handleClick}>how neat?</button>
        <h2 className={styles.subheader}>{this.state.neature.text}</h2>
      </div>
    )
  }
}

export default Index
