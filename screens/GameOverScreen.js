import { View, Image, StyleSheet } from "react-native"
import Title from "../components/ui/Title"

const GameOverScreen = () => {
  return (
    <View>
      <Title>GAME OVER</Title>
      <Image style={styles.imageContainer} source={require('../assets/images/game-over.jpg')}/>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  imageContainer: {
    width: 350,
    height: 350,
    borderRadius: 100,
    // overflow: 'hidden',
  }
})