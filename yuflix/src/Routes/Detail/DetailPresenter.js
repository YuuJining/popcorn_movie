import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    padding: 50px;
    position: relative;
    z-index: 0;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
`;

const Cover = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center center;
    border-radius: 5px;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center center;
    filter: blur(2px);
    opacity: 0.5;
`;

const DetailPresenter = ({ result, error, loading }) => (
    loading ? ( 
        <Loader /> 
        ) : (
        <Container>
            <Backdrop 
                bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}/>
            <Content>
                <Cover 
                    bgImage={
                        result.poster_path ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
                        : "/noPosterSmall.PNG"
                    } />
            </Content>
        </Container>
    )
);

DetailPresenter.prototype = {
    result:PropTypes.object,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired
};

export default DetailPresenter;