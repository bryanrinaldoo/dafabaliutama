import React from 'react'
import { EventsContainer, EventsH1, EventsWrapper, EventsCard, EventsIcon, EventsH2, EventsP } from './EventsElements'
import { events } from './DataEvent'
const Events = () => {
  return (
    <>
      <EventsContainer id='events'>
        <EventsH1>Our Events</EventsH1>
        <EventsWrapper>
        {events.map((data) => (
          <EventsCard>
            <EventsIcon src={data.img} />
            <EventsH2>Crystal Club</EventsH2>
            <EventsP>Ea cupidatat id cupidatat aliqua dolore est ullamco commodo.</EventsP>
          </EventsCard>
        ))}
        </EventsWrapper>
       
      </EventsContainer>
    </>
  )
}

export default Events