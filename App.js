import { useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'
import Palette from './constants/palette'

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)

  const userNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  const gameOverHandler =  () => {
    setGameIsOver(true)
  }

  let screen = <StartGameScreen onConfirmNumber={userNumberHandler}/>

  if (userNumber !== undefined) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={Palette.gradient}>
      <ImageBackground source={require('./assets/images/background.png')} 
        resizeMode='cover' 
        style={styles.rootScreen} 
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: 'center',
  },

  backgroundImage: {
    opacity: 0.1,
  },
})
