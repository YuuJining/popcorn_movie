import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    font-size: 12px;
`;

const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    height: 290px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
`;

const Rating = styled.span`
    bottom: 5px;
    right: 5px;
    position: absolute;
    opacity: 0;
    font-size: 15px;
`;

const Preview = styled.div`
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 65px;
    font-size: 15px;
`;

const ImageContainer = styled.div`
    margin-bottom: 10px;
    position: relative;
    &:hover {
        ${Image}{
            opacity: 0.3;
        }
        ${Rating} {
            opacity: 1;
        }
        ${Preview} {
            opacity: 1;
        }
    }
`;

const Title = styled.span`
    font-size: 15px;
    display: block;
    margin-bottom: 10px;
`;

const Year = styled.span`
    font-size: 15px;
    color: rgba(255,255,255,0.5);
`;

const Poster = ({id, imageUrl, title, rating, year, isMovie = false }) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image 
                    bgUrl={
                        imageUrl ? 
                    `https://image.tmdb.org/t/p/w300${imageUrl}` : 
                    "/noPosterSmall.PNG"
                    } 
                    />
                <Preview>상세 보기</Preview>
                <Rating>
                    <span role="img" aria-label="rating">
                        ⭐ 
                    </span>{" "}
                    {rating}/10
                </Rating>
            </ImageContainer>
            <Title>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</Title>
            <Year>{year}</Year>
        </Container>
    </Link>
);
Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
}

export default Poster;
