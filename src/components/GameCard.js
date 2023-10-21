import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import StarRating from 'react-native-star-rating';

const GameCard = ({ game }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <View className='mx-4 relative'>
      <Image source={game.image} className='w-80 h-60 rounded-2xl' />
      <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
        className="absolute p-4 h-full w-full flex justify-between rounded-2xl">
        <View className='flex-row justify-end'>
          <TouchableOpacity
            className='p-3 rounded-2xl'
            style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
            onPress={() => setIsFavourite(!isFavourite)}
          >
            <Icon name='heart' size={25} color={isFavourite ? 'red' : 'white'} />
          </TouchableOpacity>
        </View>
        <View className='space-y-1'>
          <StarRating
            disabled={true}
            starSize={15}
            containerStyle={{ width: 90 }}
            maxStars={5}
            rating={game.stars}
            emptyStar={require('../assets/images/emptyStar.png')}
            fullStar={require('../assets/images/fullStar.png')}
          />
          <Text className='text-xl font-bold text-gray-300'>
            {game.title}
            </Text>
            <View className='flex-row items-center space-x-2'>
              <Feather name='download' size={18} color='lightgray'/>
              <Text className='text-sm font-semibold text-gray-300'>
                {game.downloads} Downloads
              </Text>
            </View>
        </View>
      </LinearGradient>
    </View>
  )
}

export default GameCard