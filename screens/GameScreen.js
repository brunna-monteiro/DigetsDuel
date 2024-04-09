import { Text, View, StyleSheet, Alert } from "react-native"
import Title from "../components/ui/Title"
import { useState, useEffect } from "react"
import NumberContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/ui/PrimaryButton"

const randomNumber = (min, max, exclude) => {
  const randNum = Math.floor(Math.random() * (max - min) + min)

  if (randNum === exclude) {
    return randomNumber(min, max, exclude)
  } else {
    return randNum
  }
}

let minBoundary = 1
let maxBoundary = 100

const GameScreen = ({userNumber, onGameOver}) => {
  const initialGuess = randomNumber(minBoundary, maxBoundary, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver()
    }
  }, [currentGuess, userNumber, onGameOver])

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber) 
    ) {
      Alert.alert("Shame on you!", "That's not fair...", [{text: 'Sorry', style: 'cancel'}])
      return
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess +1
    }
    console.log(minBoundary, maxBoundary)
    const newGuess = randomNumber(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newGuess)
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
       <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Greater or Lower?</Text>
        <View style={styles.buttom}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
        </View>
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

  buttom: {
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
})

export default GameScreen