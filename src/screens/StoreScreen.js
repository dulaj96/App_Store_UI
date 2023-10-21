import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { storeColors } from '../Theme/Index';
import GradientButton from '../components/GradientButton';
import GameCard from '../components/GameCard';
import Feather from 'react-native-vector-icons/Feather';

const categories = ['Action', 'Family', 'Puzzle', 'Adventure', 'Racing', 'Education', 'Others'];
const featured = [
  {
    id: 1,
    title: 'Zooba',
    image: require('../assets/images/zooba.png'),
    downloads: '200k',
    stars: 4
  },
  {
    id: 2,
    title: 'Subway Surfer',
    image: require('../assets/images/subway.png'),
    downloads: '5M',
    stars: 4
  },
  {
    id: 3,
    title: 'Free Fire',
    image: require('../assets/images/freeFire.png'),
    downloads: '100M',
    stars: 3
  },

  {
    id: 4,
    title: "Alto's Adventure",
    image: require('../assets/images/altosAdventure.png'),
    downloads: '20k',
    stars: 4
  },
];

const games = [
  {
    id: 1,
    title: 'Shadow Fight',
    image: require('../assets/images/shadowFight.png'),
    downloads: '20M',
    stars: 4.5
  },
  {
    id: 2,
    title: 'Valor Arena',
    image: require('../assets/images/valorArena.png'),
    downloads: '10k',
    stars: 3.4
  },
  {
    id: 3,
    title: 'Frag',
    image: require('../assets/images/frag.png'),
    downloads: '80k',
    stars: 4.6
  },
  {
    id: 4,
    title: "Zooba Wildlife",
    image: require('../assets/images/zoobaGame.png'),
    downloads: '40k',
    stars: 3.5
  },
  {
    id: 4,
    title: "Clash of Clans",
    image: require('../assets/images/clashofclans.png'),
    downloads: '20k',
    stars: 4.2
  },
];


const StoreScreen = () => {
  const [activeCategory, setActiveCategory] = useState('Action');
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <LinearGradient
      colors={['rgba(58, 131, 244,0.4)', 'rgba(9, 181, 211, 0.4)']}
      className="w-full flex-1"
    >
      <SafeAreaView>
        <StatusBar backgroundColor={'rgba(58, 131, 244,0.4)'} barStyle='dark-content' />
        <View className='container'>
          <View className='flex-row justify-between items-center mx-4 mt-1'>
            <FontAwesome name='bars' size={25} color={storeColors.text} />
            <FontAwesome name='bell' size={25} color={storeColors.text} />
          </View>

          {/* categories */}
          <View className='mt-3 space-y-4'>
            <Text
              style={{ color: storeColors.text }}
              className='mx-4 text-3xl font-bold'
            >
              Brows Games
            </Text>
            <View className='pl-3'>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {
                  categories.map((cat, index) => {
                    if (cat == activeCategory) {
                      //show gradient category
                      return (
                        <GradientButton value={cat} key={cat} containerClass="mr-2" q />
                      )
                    } else {
                      // show normal category
                      return (
                        <TouchableOpacity
                          key={index}
                          className='bg-blue-200 p-3 px-4 rounded-2xl mr-2'
                          onPress={() => setActiveCategory(cat)}
                        >
                          <Text className='text-neutral-700 text-sm'>
                            {cat}
                          </Text>
                        </TouchableOpacity>
                      )
                    }


                  })
                }
              </ScrollView>
            </View>
          </View>

          {/* featured row */}
          <View className='mt-3 space-y-4'>
            <Text style={storeColors.text} className='ml-4 text-lg font-bold'>
              Featured Games
            </Text>
            <View className='pl-3'>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                  featured.map((item, index) => {
                    return (
                      <GameCard key={index} game={item} />
                    )
                  })
                }
              </ScrollView>
            </View>
          </View>

          {/* top action games */}
          <View className='mt-3'>
            <View className='flex-row justify-between mb-2'>
              <Text style={storeColors.text} className='ml-4 text-lg font-bold'>
                Top Actions Games
              </Text>
              <TouchableOpacity className='mr-4'>
                <Text className='text-blue-600 font-bold'>See All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={{ height: 320 }} showsVerticalScrollIndicator={false}>
              {
                //GAMES LIST
                games.map((game, index) => {
                  let bg = game.id == selectedGame ? 'rgba(255,255,255,0.4)' : 'transparent';
                  return (
                    <TouchableOpacity
                      style={{ backgroundColor: bg }}
                      className="mx-4 p-2 mb-2 flex-row rounded-3xl"
                      onPress={() => setSelectedGame(game.id)}
                      key={index}>
                      <Image
                        className='rounded-2xl'
                        style={{ height: 80, width: 80 }}
                        source={game.image}
                      />
                      <View className='flex-1 flex justify-center pl-3 space-y-2'>
                        <Text
                          className='font-semibold'
                          style={{ color: storeColors.text }}
                        >
                          {game.title}
                        </Text>
                        <View className='flex-row space-x-1 space-y-0.5'>
                          <Image
                            className='h-4 w-4 opacity-80'
                            source={require('../assets/images/fullStar.png')}
                          />
                          <Text className='text-xs text-gray-700'>{game.stars} Stars</Text>
                        </View>
                        <View className='flex-row space-x-1 space-y-0.5'>
                          <Feather name='download' size={15} color='blue' />
                          <Text className='text-xs text-gray-700'>{game.downloads} Downloads</Text>
                        </View>
                      </View>
                      <View className='flex justify-center items-center'>
                        <GradientButton value='Play' buttonClass='py-2 px-5' />
                      </View>
                    </TouchableOpacity>
                  )
                })
              }
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default StoreScreen