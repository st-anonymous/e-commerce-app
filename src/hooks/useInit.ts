import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useSetRecoilState} from 'recoil';
import AvailableItems from '../data/AvailableItems';
import RenderingItems from '../data/RenderingItems';

const useInit = () => {
  const setAvailableItems = useSetRecoilState(AvailableItems);
  const setRenderingItems = useSetRecoilState(RenderingItems);
  const navigation = useNavigation();
  (async () => {
    const itemsData = await axios.get('https://dummyjson.com/products');
    setAvailableItems(itemsData.data.products);
    setRenderingItems(itemsData.data.products);
    navigation.navigate('Home' as never);
  })();
};

export default useInit;
