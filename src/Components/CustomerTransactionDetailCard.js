import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomerTransactionDetailCard = ({
  DateandTime,
  Balance,
  YouGaveAmount,
  YouGotAmount,
  BillNo,
  ItemDetails,
  onPressCard,
  TransctionType,
}) => {
  return (
    <TouchableOpacity
    style={styles.cardMainView}
      onPress={() => {
        onPressCard();
      }}>
      <View >
        <Text style={{marginBottom: 12}}>{DateandTime}</Text>
        {/* <Text style={styles.marginStyle}>Bal. {Balance}</Text> */}
        <Text>Bill No. {BillNo}</Text>
        {/* <Text>{ItemDetails}</Text> */}
      </View>
      <View style={[{flexDirection: 'row'}]}>
          <Text style={styles.youGaveAmount}>{TransctionType === 'GAVE' && YouGaveAmount}</Text>
          <Text style={styles.youGotAmount}>{TransctionType === 'GOT' && YouGotAmount}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomerTransactionDetailCard;

const styles = StyleSheet.create({
  cardMainView: {
    borderWidth: 0.5,
    margin: 8,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12
  },
  marginStyle: {
  },
  youGaveAmount: {
    color: 'red',
    width: 100
  },
  youGotAmount: {
    color: 'green',

  },
});
