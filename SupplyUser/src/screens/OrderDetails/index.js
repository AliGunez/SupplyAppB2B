import {View, Text, Image, FlatList} from 'react-native';
import OrderListItem from '../../components/OrderListItem';
import orders from "../../../assets/data/orders.json";
import Suppliers from "../../../assets/data/Suppliers.json";
import styles from './styles';
import BasketItem from '../../components/BasketItem';

const order = orders[0];

const OrderDetailsHeader = () => {
    return (
    <View>
        <View styles={styles.page}>
            <Image source={{uri: order.Supplier.image}} style={styles.image} resizeMode="cover" />

            <View style={styles.container}>
                <Text style={styles.title}>{order.Supplier.name}</Text>
                <Text style={styles.subtitle}>{order.status} &#8226; {order.createdAt}</Text>
            </View>
            <View><Text style={styles.items}>Your order</Text></View>
        </View>
    </View>
    );
};

const OrderDetails = () => {
    return (
        <FlatList
        ListHeaderComponent={OrderDetailsHeader}
        data={Suppliers[0].stock} renderItem={({item}) => <BasketItem basketItem={item}/>}/>
    );
};

export default OrderDetails;