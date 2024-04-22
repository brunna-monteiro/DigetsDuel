import { View, Text, StyleSheet } from "react-native"
import Palette from "../../constants/palette"

const GuessItem = ({roundNumber, guess}) => {
  return (
    <View style={styles.listItem}>
        <Text style={styles.itemText}>#{roundNumber}</Text>
        <Text style={styles.itemText}>Number guessed: {guess}</Text>
    </View>
  )
}

export default GuessItem

const styles = StyleSheet.create({
    listItem: {
        borderColor: Palette.primary800,
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Palette.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },

    itemText: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        color: Palette.secondary200,
    }
})