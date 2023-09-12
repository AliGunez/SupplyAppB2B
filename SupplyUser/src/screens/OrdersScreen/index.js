import React from 'react';
import { View, Text, FlatList } from 'react-native';
import OrderListItem from '../../components/OrderListItem';
import orders from '../../../assets/data/orders.json';

const OrderScreen = () => {
  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Text style={{ fontWeight: '700', fontSize: 23, marginHorizontal: 'auto', marginVertical: 10 }}>
        Your Orders
      </Text>
      <FlatList
        data={orders}
        renderItem={({ item, index }) => (
          <React.Fragment>
            <OrderListItem order={item} />
            {index !== orders.length  && <View style={{ height: 1, backgroundColor: 'grey' }} />}
          </React.Fragment>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default OrderScreen;
