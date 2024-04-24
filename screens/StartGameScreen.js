import { useState } from "react"
import { TextInput, View, Alert, StyleSheet, 
  Text, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import Palette from "../constants/palette"
import Title from "../components/ui/Title"
import BodyText from "../components/ui/BodyText"
import CardContainer from "../components/ui/CardContainer"

const StartGameScreen = ({onConfirmNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('')

  const { width, height } = useWindowDimensions()

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

  const marginTop = height < 400 ? 0 : '10%'
  const padding = height < 400 ? 0 : 24
  const marginBottom = height < 400 ? 20 : '10%'
  const marginTopDistance = height < 400 ? 0 :'20%'


  return (
    <ScrollView style={styles.superRoot}>
      {/* KeybordAvoidingView allows move the screen away from the keybord,
      which is essencial for iOs and it's wrap in a scrollView because the position behavior
      otherwise, the screen would be broken. */}
      <KeyboardAvoidingView style={styles.superRoot} behavior="position">
        <View style={[styles.superRoot, {marginTop: marginTop}, {padding: padding}]}>
          <Title>Digets Duel</Title>
          <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
            <CardContainer>
            <BodyText>Enter a number</BodyText>
            <Text style={styles.sideNote}>from 1 to 99</Text>
              <TextInput
                style={[styles.numberInput, {marginBottom: marginBottom}]} 
                maxLength={2} 
                keyboardType="number-pad"
                onChangeText={setEnteredNumber}
                value={enteredNumber}/>
              <View style={styles.buttonsContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
              </View>
            </CardContainer>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  
  superRoot: {
    flex: 1,
  },
  
  rootContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  sideNote: {
    color: Palette.secondary200,
  },
  
  numberInput: {
    width: 64,
    fontFamily: 'open-sans-bold',
    fontSize: 40,
    color: Palette.secondary200,
    borderBottomColor: Palette.secondary200,
    borderBottomWidth: 2,
    textAlign: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
  },
})