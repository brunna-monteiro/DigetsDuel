import { View, Text, StyleSheet, useWindowDimensions} from "react-native"
import Palette from "../../constants/palette"

const NumberContainer = ({children}) => {
  const {width, height} = useWindowDimensions()
  const fontSize = width < 380 ? 48 : 64
  return (
    <View>
        <Text style={[styles.numberText, {fontSize: fontSize}]}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({

    numberText: {
      fontFamily: 'open-sans-bold',
      color: Palette.secondary200,
    },
})