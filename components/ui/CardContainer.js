import { View, StyleSheet, useWindowDimensions } from "react-native"
import Palette from "../../constants/palette"


const CardContainer = ({children, style}) => {
  const { width, height } = useWindowDimensions()
  const paddingHorizontalPortrait = width < 400 ? 24 : 50
  const paddingVerticalPortrait = width < 400 ? 24 : 35
  const widthCard = width > 480 ? '70%' : '100%'
  return (
    <View style={[styles.card, style, 
      {paddingHorizontal: paddingHorizontalPortrait}, 
      {paddingVertical: paddingVerticalPortrait}, 
      {width: widthCard}
    ]}>{children}</View>
  )
}

export default CardContainer

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Palette.primary600,
        marginTop: 5,

        borderWidth: 1,
        borderColor: Palette.primary800,
        borderRadius: 8,
        elevation: 4,
        // elevation works only on Android
        // To set iOS shadow use the group below:
        shadowColor: Palette.primary800,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    }
    
})