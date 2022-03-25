
import {Image, StyleSheet, Text, View} from 'react-native';
import ButtonMain from '../Components/ButtonMain';
import Gap from '../Components/Gap';
import {IL_GetStarted_PNG} from '../Illustrations';

const Main = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Image source={IL_GetStarted_PNG} style={styles.image} />
      <View style={styles.wrapperSlogan}>
        <Text style={styles.txtSlogan}>Shop Your Daily </Text>
        <Text style={styles.txtSlogan}>Necessary</Text>
      </View>
      <Gap height={90} />
      <ButtonMain
        onPress={() => navigation.replace('SignIn')}
        text="Get Started"
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  screen: {flex: 1, paddingHorizontal: 20, justifyContent: 'center'},
  image: {height: 225, width: '100%', resizeMode: 'stretch'},
  wrapperSlogan: {marginTop: 51},
  txtSlogan: {
    fontSize: 30,
    textAlign: 'center',
    
  },
});
