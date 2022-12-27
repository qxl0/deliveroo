import { ScrollView, Text } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CategoryCard
        imgUrl="https://image.shutterstock.com/image-photo/assorted-sushi-nigiri-maki-big-260nw-1937661397.jpg"
        title="testing 1"
      />
      <CategoryCard
        imgUrl="https://image.shutterstock.com/image-photo/assorted-sushi-nigiri-maki-big-260nw-1937661397.jpg"
        title="testing 2"
      />
      <CategoryCard
        imgUrl="https://image.shutterstock.com/image-photo/assorted-sushi-nigiri-maki-big-260nw-1937661397.jpg"
        title="testing 3"
      />
      <CategoryCard
        imgUrl="https://image.shutterstock.com/image-photo/assorted-sushi-nigiri-maki-big-260nw-1937661397.jpg"
        title="testing 4"
      />
      <CategoryCard
        imgUrl="https://image.shutterstock.com/image-photo/assorted-sushi-nigiri-maki-big-260nw-1937661397.jpg"
        title="testing 4"
      />
      <CategoryCard
        imgUrl="https://image.shutterstock.com/image-photo/assorted-sushi-nigiri-maki-big-260nw-1937661397.jpg"
        title="testing 4"
      />
      <CategoryCard
        imgUrl="https://image.shutterstock.com/image-photo/assorted-sushi-nigiri-maki-big-260nw-1937661397.jpg"
        title="testing 4"
      />
    </ScrollView>
  );
};

export default Categories;
