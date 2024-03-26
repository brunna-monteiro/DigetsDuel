import { TextInput, View, StyleSheet } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad"/>
        <View style={styles.buttonsContainer}>
          <View style={styles.singleButtonContainer}>
            <PrimaryButton>Reset</PrimaryButton>
          </View>
          <View style={styles.singleButtonContainer}>
            <PrimaryButton>Confirm</PrimaryButton>
          </View>
        </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#046770',
    borderRadius: 8,
    elevation: 4,
    // elevation works only on Android
    // To set iOS shadow use the group below:
    shadowColor: '#00272a',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  numberInput: {
    height: 52,
    width: 52,
    fontSize: 32,
    fontWeight:'bold',
    borderBottomColor: '#baba1f',
    borderBottomWidth: 2,
    color: '#f0bd50',
    marginVertical: 8,
    textAlign: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
  },

  singleButtonContainer: {
    flex: 1,
    alignItems: 'center',
  },
})