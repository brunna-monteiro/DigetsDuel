import { View, Text, Pressable, StyleSheet } from "react-native" 

const PrimaryButton = ({ children }) => {

    function pressHandler() {
        console.log('Hey presssssss')
    }

  return (
    <View style={styles.buttonOuterContainer}>
        <Pressable onPress={pressHandler} style={styles.buttonInnerContainer} android_ripple={{color: '#078691'}}>
        {/* Adapting Ripple to iOS */}
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
        borderRadius: 8,
        overflow: 'hidden',
    },
    
    buttonInnerContainer: {
        flexDirection: 'row',
        backgroundColor: '#069daa',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },

    buttonText: {
        color: '#faefdd',
        textAlign: 'center',
    },
// Ripple effect on iOS is different setted:
    // pressed: {
    //     opacity: 0.75,
    // },
})
