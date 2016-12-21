const neatures = [
  {
    firstText: 'He is neater than',
    secondText: 'whiskey off the rocks.',
    image: 'whiskey.jpg',
  },
  {
    firstText: 'He made a podcast called',
    link: {
      href: 'https://itunes.apple.com/us/podcast/thats-pretty-neat/id997578046?mt=2',
      text: 'That\'s Pretty Neat',
    },
    secondText: 'with his neat pals.',
    image: 'podcast.jpg',
  },
]

export const selectNeature = (skip) => {
  const randomIndex = Math.floor(Math.random() * (neatures.length));
  if (skip && JSON.stringify(neatures[randomIndex]) === JSON.stringify(skip)) {
    if (randomIndex === (neatures.length - 1)) {
      return neatures[0] // back to first neature!
    }
    return neatures[randomIndex + 1] // don't show the same neature twice, jeez
  }
  return neatures[randomIndex] // random neature!
}

export default selectNeature
