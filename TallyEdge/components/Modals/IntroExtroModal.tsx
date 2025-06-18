import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '@/assets/styles/intro.modal.styles';
import { Ionicons } from '@expo/vector-icons';
import { useTour } from '@/context/TourContext';
import { router } from 'expo-router';

type Props = {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  content: string;
  buttonText: string;
}

const IntroExtroModal = ({ isVisible, onClose, title, content, buttonText }: Props) => {
  const { startTour } = useTour();

  const handlePress = () => {
    startTour(router.push);
    onClose();
  }
  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name='close' size={24} color='#000' />
          </TouchableOpacity>

          <Text style={styles.modalText}>{title}</Text>
          <Text style={styles.modalContentText}>{content}</Text>

          <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default IntroExtroModal
