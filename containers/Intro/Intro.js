import React from 'react';
import { Heading, Image, Row, Title, View } from '@shoutem/ui';
import { LinkButton } from '../../components';

const Intro = () => (
  <View styleName="flexible">
    <View styleName="flexible">
      <Image
        source={require('../../assets/icons/trivia10.png')}
        style={{ resizeMode: 'contain', height: '100%', width: '100%' }}
      />
    </View>
    <View styleName="flexible">
      <Heading>Welcome to the Trivia Challenge</Heading>
      <Title>You will be presented with 10 True or False questions.</Title>
    </View>
    <View styleName="flexible">
      <Title>Can you score 100%?</Title>
      <Row>
        <LinkButton to="/initialize"><Title>BEGIN</Title></LinkButton>
      </Row>
    </View>
  </View>
);

export default Intro;
