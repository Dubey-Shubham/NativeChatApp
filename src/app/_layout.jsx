import { Redirect, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { getItem } from '../utils/utils';

SplashScreen.preventAutoHideAsync(); // will not let screen hide

const RootLayout = () => {

  const [isLogin, setIsLogin] = useState(true)
  const token = getItem('access_token');
  // jupl

  useEffect(() => {
    SplashScreen.hideAsync();
  }, [])

  useEffect(() => {
    console.log("access_token", token)
  }, [token])

  return (
    <>
      <Stack screenOptions={{headerShown: false}}/>
      {isLogin ? <Redirect href={"/(main)"} /> : <Redirect href={"/(auth)"} />}
    </>
  )
}

export default RootLayout