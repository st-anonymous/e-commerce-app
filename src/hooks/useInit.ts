import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useSetRecoilState} from 'recoil';
import AvailableItems from '../data/AvailableItems';

const useInit = () => {
  const setAvailableItems = useSetRecoilState(AvailableItems);
  const navigation = useNavigation();
  (async () => {
    const itemsData = await axios.get('https://dummyjson.com/products');
    setAvailableItems(itemsData.data.products);
    navigation.navigate('Main' as never);
  })();
};

export default useInit;
