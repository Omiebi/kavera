import React from 'react';
import './OurStory.css';
import SectionTitle from '../../atoms/section-title/SectionTitle';
import StoryImage from '../../atoms/story-image/StoryImage';
import { useIcons } from '../../../hooks/useIcons';

const OurStory = () => {
  const { storyImg1, storyImg2, storyImg3 } = useIcons();

  return (
    <div className='our-story'>
      <div className='container'>
        <div className='details'>
          <div className='section-title-wrapper'>
            <SectionTitle title1={'Our'} title2={'Story'} />
          </div>
          <div className='story-image-wrapper'>
            <StoryImage img={storyImg1} />
          </div>
          <p className='info'>
            Founded with a vision to create opportunities and transform lives,
            Kavera Ltd was born out of a passion for helping people. We aim to
            bridge the gap between clients and skilled professionals, while also
            offering products and services that enhance daily living.
          </p>
        </div>
        <div className='details'>
          <div className='section-title-wrapper'>
            <SectionTitle title1={'Our'} title2={'Mission'} />
          </div>
          <div className='story-image-wrapper'>
            <StoryImage img={storyImg2} />
          </div>
          <p className='info'>
            To deliver innovative solutions that simplify lives, foster career
            growth, and inspire trust across every interaction.
          </p>
        </div>
        <div className='details'>
          <div className='section-title-wrapper'>
            <SectionTitle title1={'Our'} title2={'Vision'} />
          </div>
          <div className='story-image-wrapper'>
            <StoryImage img={storyImg3} />
          </div>
          <p className='info'>
            Founded with a vision to create opportunities and transform lives,
            Kavera Ltd was born out of a passion for helping people. We aim to
            bridge the gap between clients and skilled professionals, while also
            offering products and services that enhance daily living.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
