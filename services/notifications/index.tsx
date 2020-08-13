import * as Notifications from 'expo-notifications';

export async function setNotification(): Promise<string> {
  return Notifications.scheduleNotificationAsync({
    content: {
      title: "Time's up!",
      body: 'Change sides!',
    },
    trigger: {
      seconds: 120,
    },
  });
}
