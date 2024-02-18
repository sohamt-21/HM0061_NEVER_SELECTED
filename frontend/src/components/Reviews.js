import React from 'react';
import Marquee from 'react-marquee-slider';
import times from 'lodash/times';
import ReviewCard from './ReviewCard';

const Reviews = () => (
    <div className="reviews-container" style={{height:'100vh'}}>
        <Marquee velocity={25} scatterRandomly minScale={0.7}>
            {times(6, String).map((id) => (
                <ReviewCard
                    key={`marquee-example-review-${id}`}
                    avatarSrc={`https://randomuser.me/api/portraits/women/${id}.jpg`}
                    reviewerName={`User ${id}`}
                    reviewText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${id}`}
                />
            ))}
        </Marquee>
    </div>
);

export default Reviews;
