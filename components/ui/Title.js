import { Text, StyleSheet, useWindowDimensions } from "react-native"
import Palette from "../../constants/palette"

const Title = ({children, style}) => {
  const {height, width} = useWindowDimensions()
  const marginVertical = height < 400 ? 10 : '5%'
  return (
    <Text style={[styles.title, style, {marginVertical: marginVertical}]}>{children}</Text>
  )
}

export default Title


const styles = StyleSheet.create({

    title: {
      fontFamily: 'open-sans-bold',
      fontSize: 32,
      color: Palette.secondary200,
      textAlign: 'center',
      
      // borderBottomWidth: 2,
      // borderColor: Palette.secondary200,
      paddingTop: 12
    }
  })
  