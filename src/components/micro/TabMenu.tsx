import React, {useMemo} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Typo from './Typo';
import {useRoute, useNavigation} from '@react-navigation/native';
import {TabMenuType} from '../../Types';

const TabMenu = (props: TabMenuType) => {
  const {screen} = props;
  const route = useRoute();
  const screenName = useMemo(() => route.name, [route.name]);
  const navigation = useNavigation();

  const HandleTabMenuClick = () => {
    if (screen !== 'More') {
      navigation.navigate(screen as never);
    }
  };
  let image = 'more_vertical';

  return (
    <View style={styles.buttonWholeContainer}>
      {screen === screenName ? (
        <View style={styles.highlightedButtonOutside}>
          <View style={styles.highlightedButton}>
            <Image
              source={require('../../assets/icons/more_vertical.png')}
              style={styles.buttonImage}
            />
          </View>
        </View>
      ) : (
        <TouchableOpacity
          onPress={HandleTabMenuClick}
          style={styles.buttonContainer}>
          <Image
            source={require(`../../assets/icons/${image}.png`)}
            style={styles.buttonImage}
          />
          <Typo text={screen} variant={'btn2'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default React.memo(TabMenu);

const styles = StyleSheet.create({
  buttonWholeContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    height: 20,
    width: 20,
  },
  highlightedButtonOutside: {
    position: 'absolute',
    padding: 5,
    borderRadius: 35,
    backgroundColor: 'transparent',
    top: -65,
  },
  highlightedButton: {
    padding: 20,
    borderRadius: 30,
    backgroundColor: '#1E222B',
    elevation: 10,
  },
});
