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
        margin: 4,
        marginTop: 32,
        borderRadius: 8,
        overflow: 'hidden',
    },

    buttonInnerContainer: {
        backgroundColor: Palette.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        alignItems: 'center',
    },

    buttonText: {
        color: Palette.secondary50,
        // textAlign: 'center',

    },
// Ripple effect on iOS is different setted:
    // pressed: {
    //     opacity: 0.75,
    // },
})
