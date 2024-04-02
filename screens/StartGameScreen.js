import { useState } from "react"
import { TextInput, View, Alert, StyleSheet } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import Palette from "../constants/palette"

const StartGameScreen = ({onConfirmNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('')

  function resetInputHandler() {
    setEnteredNumber('')
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid input', 'It has to be a number between 1 and 99.', 
      [{ text: 'Okay', 
      style: 'destructive', 
      onPress: resetInputHandler}])
      // ALert takes 3 arguments: title, msg and config button
      return
    }
    onConfirmNumber(chosenNumber)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput} 
        maxLength={2} 
        keyboardType="number-pad"
        onChangeText={setEnteredNumber}
        value={enteredNumber}/>
      <View style={styles.buttonsContainer}>
        <View style={styles.singleButtonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.singleButtonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 100,
    marginHorizontal: 24,
    padding: 32,
    backgroundColor: Palette.primary600,
    borderRadius: 8,
    elevation: 4,
    // elevation works only on Android
    // To set iOS shadow use the group below:
    shadowColor: Palette.primary800,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  numberInput: {
    height: 52,
    width: 52,
    fontSize: 32,
    fontWeight:'bold',
    borderBottomColor: Palette.secondary200,
    borderBottomWidth: 2,
    color: Palette.secondary200,
    marginVertical: 8,
    textAlign: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
  },

  singleButtonContainer: {
    flex: 1,
  },
})