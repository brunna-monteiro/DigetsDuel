import { View, Text, Pressable, StyleSheet } from "react-native"
import Palette from "../../constants/palette"

const PrimaryButton = ({ children, onPress }) => {

  return (
    <View style={styles.buttonOuterContainer}>
        <Pressable onPress={onPress} style={styles.buttonInnerContainer} android_ripple={{color: Palette.primary400}}>
        {/* Adapting Ripple to iOS + Android */}
        {/* <Pressable onPress={pressHandler} style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer} android_ripple={{color: '#078691'}}> */}
       
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        overflow: 'hidden',
        margin: 8,
    },

    buttonInnerContainer: {
        backgroundColor: Palette.primary500,
        paddingVertical: 24,
        paddingHorizontal: 32,
        elevation: 4,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Palette.primary600,
        borderRadius: 8,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Palette.secondary50,
    },
// Ripple effect on iOS is different setted:
    // pressed: {
    //     opacity: 0.75,
    // },
})
