/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Container from '../components/Container';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import TextComponent from '../components/TextComponent';
import TitleComponent from '../components/TitleComponent';
import {Text, View} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import CardComponent from '../components/CardComponent';

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="space-between">
          {/* <Text style={[globalStyles.text]} />
          <Text style={[globalStyles.text]} /> */}
          <TextComponent text="data" />
          <TextComponent text="data" />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        {/* <Text style={[globalStyles.text]}>Hi, Jason</Text>
        <Text style={[globalStyles.text]}>Be Productive today</Text> */}
        <TextComponent text="Hi, Jason" />
        <TitleComponent text="Be Productive today" />
      </SectionComponent>
      <SectionComponent>
        {/* <TouchableOpacity style={[globalStyles.row]}>
          <TextComponent text="Search" />
        </TouchableOpacity> */}
        <RowComponent
          styles={[globalStyles.inputContainer]}
          onPress={() => console.log('Say, Hi')}>
          <TextComponent text="Search" />
          <Text>Icon Search</Text>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{ flex: 1 }}>
              <TitleComponent text="Task progress" />
              <TextComponent text="30/40 tasks done"/>
              <TextComponent text="Tag" />
            </View>
            <View>
            <TextComponent text="CircleChart" />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;
