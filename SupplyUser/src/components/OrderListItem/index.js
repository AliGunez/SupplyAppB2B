import {View, Text, Image} from 'react-native'

const OrderListItem = ({order}) => {
    return (
        <View style={{ flexDirection: "row", margin: 15, alignItems: "center"}}>
            <Image 
             source={{ uri: order.Supplier.image}}
             style={{width: 75, height: 75, marginRight: 10}}
            />

            <View>
                <Text style={{fontWeight: "700", fontSize: 16}}>{order.Supplier.name}</Text>
                <Text style={{fontWeight: "500", marginVertical: 5, color: "grey"}}>3 items &#8226; £38.50</Text>
                <Text style={{fontWeight: "500", color: "grey"}}>2 days ago &#8226; {order.status}</Text>
            </View>
        </View>
    );
};


export default OrderListItem