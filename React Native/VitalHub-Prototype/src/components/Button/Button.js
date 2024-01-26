import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const Button = ({
    title,
    iconSource = "",
    reversed = false,
    additionalStyle,
    onPress,
}) => {
    return (
        <TouchableOpacity
          style={[styles(reversed).button, additionalStyle]}
          onPress={onPress}
        >
          {iconSource !== "" ?
            <Image source={iconSource} />
          : null}
          <Text style={styles(reversed).buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = (reversed) => StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: reversed ? '#fff' : '#496BBA',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: reversed ? '#496BBA' : '#fff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonText: {
    color: reversed ? '#496BBA' : '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'MontserratAlternates-Black'
  },
});

export default Button;