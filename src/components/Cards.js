import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>THE ULTIMATE TRAINING FACILITY</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/slika_1.jpg'
              text='My one day efforts, will change my tomorrow.'
              label='Training'
              path='/members'
            />
            <CardItem
              src='images/slika_2.jpg'
              text='I dont feel energetic until I workout one time in a day.'
              label='No excuses'
              path='/workouts'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/slika_3.jpg'
              text='My body needs Meals And workout.'
              label='Every day'
              path='/coachs'
            />
            <CardItem
              src='images/slika_$.jpg'
              text='I used to pay my hundred percent because I didnt want to lose.'
              label='Activity'
              path='/workoutTypes'
            />
            <CardItem
              src='images/slika_5.jpg'
              text='Beast mode activated, stay away.'
              label='Adrenaline'
              path='/employees'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
