import { Text, View, StyleSheet } from "react-native"
import Title from "../components/ui/Title"
import { useState } from "react"
import NumberContainer from "../components/game/NumberContainer"

const randomNumber = (min, max, exclude) => {
  const randNum = Math.floor(Math.random() * (max - min) + min)

  if (randNum === exclude) {
    return randomNumber(min, max, exclude)
  } else {
    return randNum
  }
}


const GameScreen = ({userNumber}) => {
  const initialGuess = randomNumber(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
       <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Hight or Lower?</Text>
        {/* + - buttons */}
      </View>
      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
})

export default GameScreen