import { View, Image, StyleSheet } from "react-native"
import Palette from "../constants/palette"
import Title from "../components/ui/Title"
import BodyText from "../components/ui/BodyText"
import PrimaryButton from "../components/ui/PrimaryButton"

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title> 
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/game-over.jpg')}/>
      </View>
      <BodyText>
        Your phone needed
        <BodyText style={styles.highlightText}> {roundsNumber}</BodyText> rounds to guess the number
        <BodyText style={styles.highlightText}> {userNumber}</BodyText>.
      </BodyText>
      <PrimaryButton onPress={onStartNewGame}>New Game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: '10%',
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    width: 350,
    height: 350,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Palette.primary800,
    overflow: 'hidden',
    margin: 24,
  },

  image: {
    width: '100%',
    height: '100%'
  },

  highlightText: {
    color: Palette.secondary50,
    fontWeight: 'bold',
  }
})