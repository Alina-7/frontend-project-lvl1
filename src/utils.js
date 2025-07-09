function getRandomNumber(max, min) {
  const number = Math.floor(Math.random() * (max - min) + min)
  return number
}

getRandomNumber()

export default getRandomNumber