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

export const selectNeature = (skip) => {
  const randomIndex = Math.floor(Math.random() * (neatures.length));
  if (skip && neatures[randomIndex].text === skip.text) {
    if (randomIndex === (neatures.length - 1)) {
      return neatures[0] // back to first neature!
    }
    return neatures[randomIndex + 1] // don't show the same neature twice, jeez
  }
  return neatures[randomIndex] // random neature!
}

export default selectNeature
