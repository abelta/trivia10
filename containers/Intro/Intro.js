import React from 'react';
import { Subtitle, Text, Title, View } from '@shoutem/ui';
import { Link } from 'react-router-native';

const Intro = () => (
  <View styleName="flexible">
    <Title>Welcome to the Trivia Challenge</Title>
    <Subtitle>You will be presented with 10 True or False questions.</Subtitle>
    <Subtitle>Can you score 100%?</Subtitle>
    <Link to="/initialize"><Text>BEGIN</Text></Link>
  </View>
);

export default Intro;
