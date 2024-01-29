import { Modal, Pressable, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed'
import { FC, useState } from 'react'

interface EP {
  isVisible: boolean
  onClose: () => void
}

const Picker: FC<EP> = ({ isVisible, onClose }) => (
  <Modal
    presentationStyle='formSheet'
    animationType='slide'
    transparent={false}
    visible={isVisible}
    onRequestClose={onClose}
  >
    <View style={{ backgroundColor: 'green', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable onPress={onClose}>
        <Text>Close modal</Text>
      </Pressable>
    </View>
  </Modal>
)

export default function TabTwoScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setIsModalVisible(true)
        }}
      >
        <Text>Open inline modal</Text>
      </Pressable>

      <Picker
        isVisible={isModalVisible}
        onClose={() => {
          setIsModalVisible(false)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
