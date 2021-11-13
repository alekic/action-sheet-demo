import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

import ListItem from './ListItem';
import Separator from './Separator';

export default function ActionSheet({
  contentContainerStyle,
  isVisible,
  items,
  onDismiss,
  renderItem
}) {

  const renderItems = () => {
    return items.map((item, index) => {
      if (renderItem) {
        return renderItem({ item, index });
      }

      if (item === 'separator') {
        return <Separator key={index} />;
      }

      return (
        <ListItem
          {...item}
          key={index}
          onPress={() => {
            onDismiss();
            item.onPress();
          }}
        />
      );
    });
  };

  return (
    <Modal
      backdropTransitionOutTiming={0}
      isVisible={isVisible}
      onBackdropPress={onDismiss}
      onSwipeComplete={onDismiss}
      style={styles.modal}
      swipeDirection={['down']}
    >
      <View
        style={[
          styles.contentContainer,
          contentContainerStyle
        ]}
      >
        <View style={styles.handle} />
        <ScrollView>
          {renderItems()}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'white'
  },
  handle: {
    alignSelf: 'center',
    backgroundColor: '#ddd',
    borderRadius: 2,
    height: 3,
    marginVertical: 7.5,
    width: 35
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0
  }
});
