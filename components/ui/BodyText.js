import { Text, StyleSheet } from "react-native"
import Palette from "../../constants/palette"

const BodyText = ({children, style}) => {
  return (
    <Text style= {[styles.text, style]}>{children}</Text>
  )
}

export default BodyText

const styles = StyleSheet.create({
    text: {
      fontFamily: 'open-sans',
      fontSize: 20,
      fontWeight: '700',
      color: Palette.secondary200,
      margin: '5%',
      textAlign: 'center',
    },
})