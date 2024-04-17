import { View, StyleSheet, Alert } from "react-native"
import Title from "../components/ui/Title"
import { useState, useEffect } from "react"
import NumberContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/ui/PrimaryButton"
import BodyText from "../components/ui/BodyText"
import { FontAwesome } from "@expo/vector-icons"

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
  const initialGuess = randomNumber(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver()
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

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
        <BodyText>Is your number greater or lower?</BodyText>
        <View style={styles.button}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <FontAwesome name="minus"/>
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            <FontAwesome name="plus"/>
          </PrimaryButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 48,
    justifyContent: 'space-evenly',
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})

export default GameScreen