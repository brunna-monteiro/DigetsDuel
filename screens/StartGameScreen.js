import { useState } from "react"
import { TextInput, View, Alert, StyleSheet, Text } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import Palette from "../constants/palette"
import Title from "../components/ui/Title"
import BodyText from "../components/ui/BodyText"

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
    <View style={styles.superRoot}>
      <Title>Digets Duel</Title>
      <View style={styles.rootContainer}>
        <View style={styles.inputContainer}>
        <BodyText>Enter a number</BodyText>
        <Text style={styles.sideNote}>from 1 to 99</Text>
          <TextInput
            style={styles.numberInput} 
            maxLength={2} 
            keyboardType="number-pad"
            onChangeText={setEnteredNumber}
            value={enteredNumber}/>
          <View style={styles.buttonsContainer}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({

  superRoot: {
    flex: 1,
    marginTop: '10%',
    padding: 24,
  },

  rootContainer: {
    marginTop: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  inputContainer: {
    alignItems: 'center',
    padding: 40,
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
    height: 56,
    width: 64,
    fontFamily: 'open-sans-bold',
    fontSize: 40,
    borderBottomColor: Palette.secondary200,
    borderBottomWidth: 1,
    color: Palette.secondary200,
    marginVertical: 8,
    textAlign: 'center',
    marginBottom: '10%'
  },

  sideNote: {
    color: Palette.secondary200,
  },

  buttonsContainer: {
    flexDirection: 'row',
  },
})