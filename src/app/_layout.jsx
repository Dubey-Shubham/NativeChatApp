import { Redirect, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
// import { storage } from '../utils/utils';

SplashScreen.preventAutoHideAsync(); // will not let screen hide

const RootLayout = () => {

  const [isLogin, setIsLogin] = useState(false)
  // const access_token = storage.getString("access_taken")

  useEffect(() => {
    SplashScreen.hideAsync();
  }, [])

  // useEffect(() => {
  //   console.log("access_token", access_token)
  // }, [access_token])

  return (
    <>
      <Stack screenOptions={{headerShown: false}}/>
      {isLogin ? <Redirect href={"/(main)"} /> : <Redirect href={"/(auth)"} />}
    </>
  )
}

export default RootLayout