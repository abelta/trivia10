import React from 'react';
import { Subtitle, Text, Title, View } from '@shoutem/ui';
import { LinkButton } from '../../components';

const Intro = () => (
  <View styleName="flexible">
    <Title>Welcome to the Trivia Challenge</Title>
    <Subtitle>You will be presented with 10 True or False questions.</Subtitle>
    <Subtitle>Can you score 100%?</Subtitle>
    <LinkButton to="/initialize"><Text>BEGIN</Text></LinkButton>
  </View>
);

export default Intro;
