import { Text, StyleSheet } from "react-native"
import Palette from "../../constants/palette"

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({

    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: Palette.secondary200,
      textAlign: 'center',
      marginTop: '10%',
  
      borderBottomWidth: 2,
      borderColor: Palette.secondary200,
      padding: 12,
    }
  })
  