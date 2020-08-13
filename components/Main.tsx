import React from 'react';
// import * as Updates from 'expo-updates';
// import * as Sentry from 'sentry-expo';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

// Sentry.init({
//  dsn: 'https://39832f2e32b74cc29e71f2fc1bbd5f92@o372933.ingest.sentry.io/5371800',
//  enableInExpoDevelopment: false,
//  debug: true,
// });

import { appConnect, AppReduxProps } from '../redux/connect/appConnect';
import { carConnect, CarReduxProps } from '../redux/connect/carConnect';
import * as storage from '../services/storage';
import * as carStorage from '../services/storage/car';

interface MainProps extends CarReduxProps, AppReduxProps {
}

class Main extends React.Component<MainProps> {


  async componentDidMount() {
     const selectedKey = await storage.retrieveData<string>(carStorage.SELECTED_KEY);
     const isMetric = await storage.retrieveData<boolean>(storage.IS_METRIC_KEY);

     this.props.setSelectedCar(selectedKey || 'default');
     this.props.setIsMetric(isMetric === undefined ? true : isMetric);

     let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);
     Notifications.addNotificationReceivedListener((notification) => {
       console.log(notification);
       alert(notification);
     });

     // const update = await Updates.fetchUpdateAsync();
     // if (update && update.isNew) {
     //   await Updates.reloadAsync();
     // }
  }

  render() {
    return null;
  }
}

export default appConnect(carConnect(Main));
