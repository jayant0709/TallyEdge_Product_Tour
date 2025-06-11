import { View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SafeScreen: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1}}>
      {children}
    </View>
  )
}

export default SafeScreen