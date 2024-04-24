import { View, Image, StyleSheet, useWindowDimensions } from "react-native"
import Palette from "../constants/palette"
import Title from "../components/ui/Title"
import BodyText from "../components/ui/BodyText"
import PrimaryButton from "../components/ui/PrimaryButton"

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  const {height, width} = useWindowDimensions()
  let content = (
    <>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/game-over.jpg')}/>
      </View>
      <BodyText>
        Your phone needed
        <BodyText style={styles.highlightText}> {roundsNumber}</BodyText> rounds to guess the number
        <BodyText style={styles.highlightText}> {userNumber}</BodyText>.
      </BodyText>
      <PrimaryButton onPress={onStartNewGame}>New Game</PrimaryButton>
    </>
  )

  if (width > 480) {
    content = (
    <>
    <View style={styles.landscape}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/game-over.jpg')}/>
      </View>
      <View style={styles.newGameContainer}>
        <BodyText>
          Your phone needed
          <BodyText style={styles.highlightText}> {roundsNumber}</BodyText> rounds to guess the number
          <BodyText style={styles.highlightText}> {userNumber}</BodyText>.
        </BodyText>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={onStartNewGame}>New Game</PrimaryButton>
        </View>
      </View>
    </View>
    </>
    )
  }

  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View>
        {content}
      </View>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  landscape: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: '80%',
    marginTop: 10
  },

  imageContainer: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    borderRadius: 75,
    borderWidth: 2,
    borderColor: Palette.primary800,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%'
  },

  highlightText: {
    color: Palette.secondary50,
    fontWeight: 'bold',
  },

  newGameContainer: {
    maxWidth: '50%',
  },

  buttonContainer: {
    marginTop: 20,
  }
})