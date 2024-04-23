import { Text, StyleSheet, useWindowDimensions } from "react-native"
import Palette from "../../constants/palette"

const BodyText = ({children, style}) => {

  const {width, height} = useWindowDimensions()
  const marginText = height < 400 ? 0 : '5%'

  return (
    <Text style= {[styles.text, style, {margin: marginText}]}>{children}</Text>
  )
}

export default BodyText

const styles = StyleSheet.create({
    text: {
      fontFamily: 'open-sans',
      fontSize: 20,
      fontWeight: '700',
      color: Palette.secondary200,
      textAlign: 'center',
    },
})