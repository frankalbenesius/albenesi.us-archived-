import React from 'react'
import Head from 'next/head'
import 'glamor/reset'
import css from 'next/css'
import { selectNeature } from '../utils/neatures'
import Button from '../components/Button'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Background from '../components/Background'

class Index extends React.Component {
  static getInitialProps () {
    return { neature: selectNeature() }
  }
  constructor(props) {
    super(props)
    this.state = { neature: props.neature }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      neature: selectNeature(this.state.neature)
    })
  }
  render() {
    return (
      <Background image={this.state.neature.image}>
        <Head>
          <title>FRANK ALBENESIUS</title>
          <meta name="description" content="gosh DARN IT he's no neat..." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/css?family=Patua+One|Roboto" rel="stylesheet" />
        </Head>
        <Header>Frank Albenesius</Header>
        <SubHeader>is a super neat guy</SubHeader>
        <Button onClick={this.handleClick}>how neat?</Button>
        <SubHeader>{this.state.neature.text}</SubHeader>
      </Background>
    )
  }
}

export default Index
