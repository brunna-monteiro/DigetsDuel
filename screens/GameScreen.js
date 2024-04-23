import { View, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native"
import Title from "../components/ui/Title"
import { useState, useEffect } from "react"
import NumberContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/ui/PrimaryButton"
import BodyText from "../components/ui/BodyText"
import GuessItem from "../components/game/GuessItem"
import CardContainer from "../components/ui/CardContainer"
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
  const [guessRounds, setGuessRounds] = useState([initialGuess])
  const {width, height} = useWindowDimensions()

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length)
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
    setGuessRounds(prevGuessRounds => [newGuess, ...prevGuessRounds])
  }

  const guessRoundLength = guessRounds.length
  const justifyContent = height < 400 ? 'center' : 'space-evenly'
  const padding = height < 400 ? 0 : 24

  return (
    <View style={[styles.screen, {justifyContent: justifyContent}, {padding: padding}]}>
      <Title>Opponent's Guess</Title>
      <CardContainer style={styles.middleContainer}>
       <NumberContainer>{currentGuess}</NumberContainer>
        <BodyText>higher or lower?</BodyText>
        <View style={styles.button}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <FontAwesome name="minus"/>
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            <FontAwesome name="plus"/>
          </PrimaryButton>
        </View>
      </CardContainer>
      <CardContainer style={styles.guessContainer}>
        <BodyText>Guesses</BodyText>
        {/* <View style={styles.guessRound}>
       {guessRounds.map(guessRound => <BodyText key={guessRound}>{guessRound}</BodyText>)}
        </View> */}
        <View style={styles.guessList}>
          <FlatList data={guessRounds} 
          renderItem={(itemData) => (
          <GuessItem roundNumber={guessRoundLength - itemData.index}
          guess={itemData.item}
          />
        )}
          keyExtractor={(item) => item}/>
        </View>
      </CardContainer>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    flexDirection: 'row',
  },

  middleContainer: {

  },

  guessContainer: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',

    // marginTop: 24,
    // backgroundColor: Palette.primary600,
    // borderWidth: 1,
    // borderColor: Palette.primary800,
    // borderRadius: 8,
    // alignItems: 'center',
  },
  
  guessList: {
    flex: 1,
  },
})
