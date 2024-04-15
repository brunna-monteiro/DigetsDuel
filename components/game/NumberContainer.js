import { View, Text, StyleSheet } from "react-native"
import Palette from "../../constants/palette"

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: Palette.primary600,
        backgroundColor: Palette.primary500,
        padding: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    numberText: {
      fontFamily: 'open-sans-bold',
      color: Palette.secondary200,
      fontSize: 56,

    },
})