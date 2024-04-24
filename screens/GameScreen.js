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
  let content = (
  <>
  <CardContainer>
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
  </>
  )

  if (width > 480) {
    content = (
    <>
    <View style={styles.landscape}>
      <CardContainer style={styles.numberContainer}>
        <BodyText>Current Guess</BodyText>
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
        <View style={styles.guessList}>
          <FlatList data={guessRounds} 
          renderItem={(itemData) => (
            <GuessItem roundNumber={guessRoundLength - itemData.index}
            guess={itemData.item}/>
          )}
          keyExtractor={(item) => item}/>
        </View>
      </CardContainer>
    </View>
    </>
    )
  }

  return (
    <View style={[styles.screen, {justifyContent: justifyContent}, {padding: padding}]}>
      <Title>Opponent's Guess</Title>
       {content}
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

  landscape: {
    flex: 1,
    flexDirection: 'row',
    maxWidth: '85%',
    marginBottom: 20,
  },

  numberContainer: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
    justifyContent: 'space-evenly',
    marginRight: 10,
  },

  guessContainer: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  
  guessList: {
    flex: 1,
  },
})
