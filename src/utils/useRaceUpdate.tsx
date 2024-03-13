import {useCallback, useEffect, useRef, useState} from 'react';
import {NativeEventEmitter, NativeModule, NativeModules} from 'react-native';

const {RaceStat} = NativeModules;

const RaceEmitter = new NativeEventEmitter(
  NativeModules.RaceStatEmitter as NativeModule,
);

const useRaceUpdate = () => {
  const [counter, setCounter] = useState(1);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const play = useCallback(() => {
    if (intervalId.current) {
      return;
    }

    RaceStat.startActivity(String(counter));

    intervalId.current = setInterval(() => {
      setCounter(prevCounter => {
        if (prevCounter === 50) {
          removeInterval();
          return prevCounter;
        }
        RaceStat.updateActivity(String(prevCounter + 1));
        return prevCounter + 1;
      });
    }, 1000);
  }, [counter]);

  const reset = useCallback(() => {
    RaceStat.endActivity();
    removeInterval();
    setCounter(1);
  }, []);

  useEffect(() => {
    const startSubscription = RaceEmitter.addListener('onStart', play);
    const resetSubscription = RaceEmitter.addListener('onReset', reset);

    return () => {
      startSubscription.remove();
      resetSubscription.remove();
    };
  }, [reset, play]);

  function removeInterval() {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  }

  return {
    play,
    reset,
    counter,
  };
};

export default useRaceUpdate;
