function getRandomNumber(maxNum, minNum) {
  const number = Math.floor(Math.random() * (maxNum - minNum) + minNum)
  return number
}

getRandomNumber()

export default getRandomNumber
