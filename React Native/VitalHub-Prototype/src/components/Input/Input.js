import { TextInput, StyleSheet } from 'react-native';

const Input = ({
  placeholder = "",
  color = "#5bbac1",
  additionalStyle,
}) => {
  return (
    <TextInput
      style={[styles(color).input, additionalStyle]}
      placeholder={placeholder}
      placeholderTextColor={color}
    />
  );
}

const styles = ( color ) => StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: color,
    width: '100%',
    height: 60,
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 16,
  },
});

export default Input;