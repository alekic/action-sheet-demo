import React, { useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Item } from 'react-navigation-header-buttons';

import ActionSheet from '../components/ActionSheet';
import { MaterialHeaderButtons } from '../components/HeaderButtons';

export default function HomeScreen({ navigation }) {
  const actionSheetRef = useRef(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialHeaderButtons>
          <Item
            iconName="more-vert"
            title="Menu"
            onPress={() => {
              actionSheetRef.current.show();
            }}
          />
        </MaterialHeaderButtons>
      )
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>

      <ActionSheet
        ref={actionSheetRef}
        items={[
          { icon: 'save',     title: 'Save',     onPress: () => console.log('Save')     },
          { icon: 'save-alt', title: 'Save As',  onPress: () => console.log('Save As')  },
          { icon: 'history',  title: 'History',  onPress: () => console.log('History')  },
          { icon: 'print',    title: 'Print',    onPress: () => console.log('Print')    },
          'separator',
          { icon: 'settings', title: 'Settings', onPress: () => console.log('Settings') },
        ]}
      />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
