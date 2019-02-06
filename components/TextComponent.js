import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';
import ScrollAnimation from 'react-animate-on-scroll';

const Title = styled.span`
  margin-top: 70px;
  font-size: 50px;
  font-family: raleway-thin;
  max-width: 960px;
  text-align: center;
`;

const Subtitle = styled.span`
  margin-top: 70px;
  font-size: 18px;
  font-family: raleway-semibold;
  max-width: 960px;
  text-align: center;
`;

const Text = styled.span`
  margin-top: 40px;
  font-size: 16px;
  font-family: raleway-light;
  max-width: 960px;
  text-align: left;
  line-height: 40px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
`;

function TextComponent(props) {
  const { title, subtitle, text } = props;

  return (
    <Grid>
      {title
          && (
          <Row xs={12}>
            <ScrollAnimation style={{ width: '100%' }} animateOnce animateIn="fadeIn">
              <TextWrapper>
                <Title>{title}</Title>
              </TextWrapper>
            </ScrollAnimation>
          </Row>
          )
        }
      {subtitle
          && (
          <Row xs={12}>
            <ScrollAnimation style={{ width: '100%' }} animateOnce animateIn="fadeIn">
              <TextWrapper>
                <Subtitle>{subtitle}</Subtitle>
              </TextWrapper>
            </ScrollAnimation>
          </Row>
          )
        }
      {text
          && (
          <Row xs={12}>
            <ScrollAnimation style={{ width: '100%' }} animateOnce animateIn="fadeIn">
              <TextWrapper>
                <Text>{text}</Text>
              </TextWrapper>
            </ScrollAnimation>
          </Row>
          )
        }
    </Grid>
  );
}

export default (TextComponent);
