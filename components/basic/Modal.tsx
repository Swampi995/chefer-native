import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomText } from './CustomText';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import * as basicStyles from './styles';
import Modal from 'react-native-modal';

interface ModalProps {
  visible: boolean;
  text: string;
  close: () => void;
  submit: () => void;
}

export const ConfirmationModal: FunctionComponent<ModalProps> = ({ visible, close, submit, text }) => {
  return (
    <Modal isVisible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.container}>
            <CustomText label={text} />
          </View>
          <View style={styles.bottomContainer}>
            <SecondaryButton onPress={close} size={35} textSize={14} bottomLabel={'Cancel'} />
            <PrimaryButton onPress={submit} size={35} textSize={14} bottomLabel={'Go to Settings'} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    padding: 20,
    backgroundColor: basicStyles.BACKGROUND_LIGHT,
    width: '95%',
    height: '30%',
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#131417",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default ConfirmationModal;
