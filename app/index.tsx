import { Image, ScrollView, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function Index() {
  return (
    <ScrollView>
      <View className="flex-col gap-5 p-5">
        {/* Topbar */}
        <View className="flex-row justify-between items-center">
          <MaterialIcons name="menu" size={24} color="black" />
          <FontAwesome name="bell" size={24} color="black" />
        </View>

        {/* Titles */}
        <Text className="text-4xl font-bold">Browse Games</Text>

        {/* Button */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Text className="bg-blue-500 mr-2 p-3 px-5 text-white rounded-xl">
            Action
          </Text>
          <Text className="bg-blue-500 mr-2 p-3 px-5 text-white rounded-xl">
            Adeventure
          </Text>
          <Text className="bg-blue-500 mr-2 p-3 px-5 text-white rounded-xl">
            RPG
          </Text>
          <Text className="bg-blue-500 mr-2 p-3 px-5 text-white rounded-xl">
            Racing
          </Text>
          <Text className="bg-blue-500 mr-2 p-3 px-5 text-white rounded-xl">
            Puzzle
          </Text>
          <Text className="bg-blue-500 mr-2 p-3 px-5 text-white rounded-xl">
            Casual
          </Text>
        </ScrollView>

        <Text className="font-bold text-xl">Featured Games</Text>

        {/* Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="h-[250px] w-[300px] mr-5">
            <Image
              source={require('../assets/images/minecraft.png')}
              className="h-[100%] w-[100%] rounded-xl"
            />
            <View className="bg-[rgba(000,000,000,0.3)] h-[100%] w-[100%] rounded-xl absolute"></View>
            <View className="absolute top-5 right-5">
              <AntDesign name="heart" size={24} color="white" />
            </View>

            <View className="absolute bottom-5 left-5">
              <View className="flex-row">
                <AntDesign name="star" size={15} color="white" />
                <AntDesign name="star" size={15} color="white" />
                <AntDesign name="star" size={15} color="white" />
                <AntDesign name="star" size={15} color="white" />
                <AntDesign name="star" size={15} color="white" />
              </View>
              <Text className="text-white text-2xl">Minecraft</Text>
              <View className="flex-row items-center gap-1">
                <AntDesign name="download" size={15} color="white" />
                <Text className="text-white">100k Downloads</Text>
              </View>
            </View>
          </View>
          <View className="h-[250px] w-[300px] mr-5 ">
            <Image
              source={require('../assets/images/clash.jpg')}
              className="h-[100%] w-[100%] rounded-xl"
            />
            <View className="bg-[rgba(000,000,000,0.3)] h-[100%] w-[100%] rounded-xl absolute"></View>
            <View className="absolute top-5 right-5">
              <AntDesign name="heart" size={24} color="white" />
            </View>

            <View className="absolute bottom-5 left-5">
              <View className="flex-row">
                <AntDesign name="star" size={15} color="white" />
                <AntDesign name="star" size={15} color="white" />
                <AntDesign name="star" size={15} color="white" />
                <AntDesign name="star" size={15} color="white" />
              </View>
              <Text className="text-white text-2xl">Clash royale</Text>
              <View className="flex-row items-center gap-1">
                <AntDesign name="download" size={15} color="white" />
                <Text className="text-white">2M Downloads</Text>
              </View>
            </View>
          </View>
          <View className="h-[250px] w-[300px] mr-5 ">
            <Image
              source={require('../assets/images/fortnite.jpg')}
              className="h-[100%] w-[100%] rounded-xl"
            />
            <View className="bg-[rgba(000,000,000,0.3)] h-[100%] w-[100%] rounded-xl absolute"></View>
            <View className="absolute top-5 right-5">
              <AntDesign name="heart" size={24} color="white" />
            </View>

            <View className="absolute bottom-5 left-5">
              <View className="flex-row">
                <AntDesign name="star" size={15} color="white" />
                <AntDesign name="star" size={15} color="white" />
                <AntDesign name="star" size={15} color="white" />
                <AntDesign name="star" size={15} color="white" />
                <AntDesign name="star" size={15} color="white" />
              </View>
              <Text className="text-white text-2xl">Fortnite</Text>
              <View className="flex-row items-center gap-1">
                <AntDesign name="download" size={15} color="white" />
                <Text className="text-white">1M Downloads</Text>
              </View>
            </View>
          </View>
          <View className="h-[250px] w-[300px] mr-5 ">
            <Image
              source={require('../assets/images/cod.jpg')}
              className="h-[100%] w-[100%] rounded-xl"
            />
            <View className="bg-[rgba(000,000,000,0.3)] h-[100%] w-[100%] rounded-xl absolute"></View>
            <View className="absolute top-5 right-5">
              <AntDesign name="heart" size={24} color="white" />
            </View>

            <View className="absolute bottom-5 left-5">
              <View className="flex-row">
                <AntDesign name="star" size={15} color="white" />
                <AntDesign name="star" size={15} color="white" />
                <AntDesign name="star" size={15} color="white" />
                <AntDesign name="star" size={15} color="white" />
              </View>
              <Text className="text-white text-2xl">Call of Duty: Mobile</Text>
              <View className="flex-row items-center gap-1">
                <AntDesign name="download" size={15} color="white" />
                <Text className="text-white">800k Downloads</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-bold ">Top Action Games</Text>
          <Text className="text-2xl font-bold text-green-500">See all</Text>
        </View>

        <View className="flex-col gap-5">
          {/* Mini cards */}
          <View className="w-full h-[150px] bg-blue-300 p-3 rounded-xl flex-row justify-between items-center">
            <Image
              source={require('../assets/images/cod.jpg')}
              className=" h-[100%] w-2/5 rounded-xl"
            />
            <View className="w-[120px] flex-col gap-5">
              <Text className="text-xl">Call of Duty: Mobile</Text>
              <View className="flex-row gap-5 items-center">
                <View className="flex-row items-center gap-1">
                  <AntDesign name="star" size={15} color="white" />
                  <Text className="text-white">4.0</Text>
                </View>
                <View className="flex-row items-center gap-1">
                  <AntDesign name="download" size={15} color="white" />

                  <Text className="text-white">2M</Text>
                </View>
              </View>
            </View>
            <Text className="bg-blue-500 p-3 px-5 text-white font-semibold rounded-xl">
              Install
            </Text>
          </View>
          <View className="w-full h-[150px] bg-blue-300 p-3 rounded-xl flex-row justify-between items-center">
            <Image
              source={require('../assets/images/fortnite.jpg')}
              className=" h-[100%] w-2/5 rounded-xl"
            />
            <View className="w-[120px] flex-col gap-5">
              <Text className="text-xl">Fortnite</Text>
              <View className="flex-row gap-5 items-center">
                <View className="flex-row items-center gap-1">
                  <AntDesign name="star" size={15} color="white" />
                  <Text className="text-white">4.2</Text>
                </View>
                <View className="flex-row items-center gap-1">
                  <AntDesign name="download" size={15} color="white" />

                  <Text className="text-white">1M</Text>
                </View>
              </View>
            </View>
            <Text className="bg-blue-500 p-3 px-5 text-white font-semibold rounded-xl">
              Install
            </Text>
          </View>
          <View className="w-full h-[150px] bg-blue-300 p-3 rounded-xl flex-row justify-between items-center">
            <Image
              source={require('../assets/images/sf.jpg')}
              className=" h-[100%] w-2/5 rounded-xl"
            />
            <View className="w-[120px] flex-col gap-5">
              <Text className="text-xl">Street Fighter</Text>
              <View className="flex-row gap-5 items-center">
                <View className="flex-row items-center gap-1">
                  <AntDesign name="star" size={15} color="white" />
                  <Text className="text-white">4.5</Text>
                </View>
                <View className="flex-row items-center gap-1">
                  <AntDesign name="download" size={15} color="white" />

                  <Text className="text-white">10M</Text>
                </View>
              </View>
            </View>
            <Text className="bg-blue-500 p-3 px-5 text-white font-semibold rounded-xl">
              Install
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
