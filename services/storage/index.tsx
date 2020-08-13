import { AsyncStorage } from 'react-native';

const STATS_KEY_PREFIX = 'box-stats-';

export const REVIEWD = 'reviewed';
export const IS_METRIC_KEY = 'is-metric-key';
export const PAST_RUNS = 'past-runs';

export async function storeData(key: string, data: Object | number | string): Promise<void> {
  try {
    await AsyncStorage.setItem(`${STATS_KEY_PREFIX}${key}`, JSON.stringify(data));
  } catch (error) {
    return;
  }
};

export async function retrieveData<C>(key: string): Promise<C> {
  try {
    const value = await AsyncStorage.getItem(`${STATS_KEY_PREFIX}${key}`);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    return null;
  }
};
