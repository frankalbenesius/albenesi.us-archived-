import React from 'react'
import Head from 'next/head'
import 'glamor/reset'
import css from 'next/css'
import { selectNeature } from '../utils/neatures'
import Background from '../components/Background'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Button from '../components/Button'
import Neature from '../components/Neature'

const getRandomHue = () => Math.floor(Math.random() * 360)
class Index extends React.Component {
  static getInitialProps () {
    return {
      neature: selectNeature(),
      hue: getRandomHue(),
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      neature: props.neature,
      hue: props.hue,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      neature: selectNeature(this.state.neature),
      hue: getRandomHue(),
    })
  }
  render() {
    return (
      <Background image={this.state.neature.image} hue={this.state.hue}>
        <Head>
          <title>FRANK ALBENESIUS</title>
          <meta name="description" content="gosh DARN IT he's no neat..." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/css?family=Patua+One|Roboto" rel="stylesheet" />
        </Head>
        <Header>Frank Albenesius</Header>
        <SubHeader>is a super neat guy</SubHeader>
        <Button onClick={this.handleClick}>how neat?</Button>
        <Neature {...this.state.neature} />
      </Background>
    )
  }
}

export default Index
