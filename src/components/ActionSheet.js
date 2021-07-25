import React, { useImperativeHandle, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

import ListItem from './ListItem';
import Separator from './Separator';

const ActionSheet = React.forwardRef((props, ref) => {

  const {
    contentContainerStyle,
    items,
    renderItem
  } = props;

  const [isVisible, setIsVisible] = useState(false);

  const hide = () => setIsVisible(false);
  const show = () => setIsVisible(true);

  useImperativeHandle(ref, () => ({ hide, show }));

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
            hide();
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
      onBackdropPress={hide}
      onSwipeComplete={hide}
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
});

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

export default ActionSheet;
