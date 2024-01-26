import { View, Image, Text, StyleSheet } from 'react-native';

const Banner = ({ title, additionalStyle }) => {
    return (
      <View style={[styles.banner, styles.flex, additionalStyle]}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/VitalHub_Logo.png')}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  flex: {
    width: '100%',
    alignItems: 'center'
  },
  banner: {
    flex: 4,
    width: '100%',
    justifyContent: 'space-around',
    paddingTop: 50,
  },
  logo: {
    width: '75%',
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    justifyContent: 'flex-end',
  },
});

export default Banner;