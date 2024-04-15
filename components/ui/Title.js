import { Text, StyleSheet } from "react-native"
import Palette from "../../constants/palette"

const Title = ({children, style}) => {
  return (
    <Text style={[styles.title, style]}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({

    title: {
      fontFamily: 'open-sans-bold',
      fontSize: 32,
      color: Palette.secondary200,
      textAlign: 'center',
      marginVertical: '5%',
  
      borderBottomWidth: 2,
      borderColor: Palette.secondary200,
      padding: 12,
    }
  })
  