import { FlatList, View } from 'react-native'
import imagepath from '../../constants/imagePaths'
import MessageCard from './MessageCard'

const chats = () => {

  const data = [
    {
      id: "1",
      image: imagepath.logo,
      name: "Shubham",
      message: "hey boi",
      time: "5:27am",
      messageCount: 1
    },
    {
      id: "2",
      image: imagepath.welcome,
      name: "kamal",
      message: "hey man!!!",
      time: "6:27am",
      messageCount: 3
    },
  ]
  return (
    <View >
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <MessageCard
            name={item.name}
            message={item.message}
            image={item.image}
            time={item.time}
            messageCount={item.messageCount}
          />
        }}
      />
    </View>
  )
}

export default chats