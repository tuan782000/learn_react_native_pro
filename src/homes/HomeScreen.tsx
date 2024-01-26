/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import Container from '../components/Container';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import TextComponent from '../components/TextComponent';
import TitleComponent from '../components/TitleComponent';
import {Text, View} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import CardComponent from '../components/CardComponent';
import {Element4, Notification, SearchNormal1} from 'iconsax-react-native';
import {colors} from '../constants/colors';
import TagComponent from '../components/TagComponent';
import SpaceComoponent from '../components/SpaceComoponent';
import CiculaComponent from '../components/CiculaComponent';
import React = require('react');

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="space-between">
          {/* <Text style={[globalStyles.text]} />
          <Text style={[globalStyles.text]} /> */}
          <Element4 size={24} color={colors.desc} />
          <Notification size={24} color={colors.desc} />
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
          <TextComponent text="Search Task" color="#69686f" />
          <SearchNormal1 size={20} color={colors.desc} />
          <Text>Icon Search</Text>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{flex: 1}}>
              <TitleComponent text="Task progress" />
              <TextComponent text="30/40 tasks done" />
              <SpaceComoponent />
              <RowComponent justify="flex-start">
                <TagComponent
                  text="March 22"
                  onPress={() => console.log('đang nhấn')}
                />
              </RowComponent>
            </View>
            <View>
              <CiculaComponent value={80} color={''} />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
      <SectionComponent>
        <RowComponent>
          <View style={{flex: 1, backgroundColor: colors.blue}}>
            <TagComponent text="col-1" />
          </View>
          <SpaceComoponent width={16} /> 
          {/* Lý do tạo SpaceComponent để cho cách đều giữa 2 cái view, dùng margin đôi khi ko chính xác */}
          <View style={{flex: 1, backgroundColor: 'coral'}}>
            <TextComponent text="data" />
          </View>
        </RowComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;
