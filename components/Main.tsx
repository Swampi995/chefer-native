import React from 'react';
// import * as Updates from 'expo-updates';
// import * as Sentry from 'sentry-expo';
// import * as Permissions from 'expo-permissions';
// import * as Notifications from 'expo-notifications';

// Sentry.init({
//  dsn: 'https://39832f2e32b74cc29e71f2fc1bbd5f92@o372933.ingest.sentry.io/5371800',
//  enableInExpoDevelopment: false,
//  debug: true,
// });

import { appConnect, AppReduxProps } from '../redux/connect/appConnect';

interface MainProps extends AppReduxProps {
}

class Main extends React.Component<MainProps> {


  async componentDidMount() {
     // let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);
     // Notifications.addNotificationReceivedListener((notification) => {
     //   console.log(notification);
     //   alert(notification);
     // });

     // const update = await Updates.fetchUpdateAsync();
     // if (update && update.isNew) {
     //   await Updates.reloadAsync();
     // }
  }

  render() {
    return null;
  }
}

export default appConnect(Main);
