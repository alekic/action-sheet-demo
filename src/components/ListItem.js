import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Touchable from './Touchable';

export default function ListItem({
  icon,
  iconStyle,
  onPress,
  style,
  title,
  titleStyle
}) {
  return (
    <Touchable onPress={onPress}>
      <View style={[styles.container, style]}>
        {!!icon &&
          <MaterialIcons
            name={icon}
            style={[styles.icon, iconStyle]}
          />
        }
        <Text
          style={[styles.title, titleStyle]}
        >
          {title}
        </Text>
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  icon: {
    fontSize: 24,
    marginRight: 20
  },
  title: {
    fontSize: 16
  }
});
