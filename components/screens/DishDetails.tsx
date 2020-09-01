import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { NavigationTabScreenProps } from 'react-navigation-tabs';
import * as basic from '../basic';
import * as basicStyles from '../basic/styles';
import { carConnect, CarReduxProps } from '../../redux/connect/carConnect';

interface SettingsScreenProps extends NavigationTabScreenProps, CarReduxProps {
}

const dish = {
  title: 'Oatmeal Porridge',
  description: `Text messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages has become an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one knows the other person is busy with family or work activities). Like e-mail and voicemail and unlike calls (in which the caller hopes to speak directly with the recipient), texting does not require the caller and recipient to both be free at the same moment; this permits communication even between busy individuals. Text messages can also be used to interact with automated systems, for example, to order products or services from e-commerce websites, or to participate in online contests. Advertisers and service providers use direct text marketing to send messages to mobile users about promotions, payment due dates, and other notifications instead of using postal mail, email, or voicemail.`
}

class SettingsScreen extends React.Component<SettingsScreenProps> {
  render() {
    return (
      <basic.Screen>
        <View style={styles.dish}>
          <View style={styles.image}>
            <basic.CustomText label={'IMAGE'} />
          </View>
          <View style={styles.header}>
            <basic.CustomText label={dish.title} />
          </View>
          <View style={styles.description}>
            <ScrollView>
              <basic.CustomText label={dish.description} />
            </ScrollView>
          </View>
        </View>
      </basic.Screen>
    );
  }
}

export default carConnect(SettingsScreen);

const styles = StyleSheet.create({
  dish: {
    flex: 1,
    paddingLeft:12,
    paddingRight:12,
    paddingTop:12,
    backgroundColor: basicStyles.ACCENT_YELLOW
  },
  image: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: basicStyles.ACCENT_RED,
    borderRadius:12
  },
  header: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: basicStyles.ACCENT_BLUE
  },
  description: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: basicStyles.ACCENT_GREEN
  }
});
