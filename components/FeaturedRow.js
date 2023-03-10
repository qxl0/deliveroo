import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon />
      </View>
      <Text className="text-xs">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          rating={4.5}
          genre="Japanese"
          title="Yo! Sushi"
          address="123 main st"
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={24}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          rating={4.5}
          genre="Japanese"
          title="Yo! Sushi"
          address="123 main st"
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={24}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          rating={4.5}
          genre="Japanese"
          title="Yo! Sushi"
          address="123 main st"
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={24}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
