import React from 'react';
import { View, Text, FlatList } from 'react-native';
import OrderListItem from '../../components/OrderListItem';
import orders from '../../../assets/data/orders.json';

const OrderScreen = () => {
  return (
    <View style={{ width: '100%', }}>
      <FlatList
        data={orders}
        renderItem={({ item, index }) => (
          <React.Fragment>
            <OrderListItem order={item} />
            {index !== orders.length  && <View style={{ height: 1, backgroundColor: 'lightgrey' }} />}
          </React.Fragment>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default OrderScreen;
