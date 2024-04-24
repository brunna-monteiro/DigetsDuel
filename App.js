import { useEffect, useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font'
import SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'

import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'
import Palette from './constants/palette'

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'), 
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync()
        await useFonts.loadAsync()
      } catch (e) {
        console.warn(e)
      } 
    }
    prepare()
  }, [])

  if (!fontsLoaded) {
    return null;
  }

  const userNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  const gameOverHandler =  (numberOfRounds) => {
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }

  const startNewGameHandler = () => {
    setUserNumber(undefined)
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onConfirmNumber={userNumberHandler}/>

  if (userNumber !== undefined) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }

  return (
    <>
      <StatusBar style='light'/>
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
    </>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.1,
  },
})
