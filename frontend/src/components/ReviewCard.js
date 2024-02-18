import React from 'react';
import PropTypes from 'prop-types';
import '../css/ReviewCard.css'

const ReviewCard = ({ avatarSrc, reviewerName, reviewText }) => {
    return (
        <div className="review-card">
            <img src={avatarSrc} alt="Reviewer Avatar" className="avatar" />
            <div className="review-content">
                <h3 id='review-card-h3'>{reviewerName}</h3>
                <p id='review-card-p'>{reviewText}</p>
            </div>
        </div>
    );
};

ReviewCard.propTypes = {
    avatarSrc: PropTypes.string.isRequired,
    reviewerName: PropTypes.string.isRequired,
    reviewText: PropTypes.string.isRequired,
};

export default ReviewCard;
