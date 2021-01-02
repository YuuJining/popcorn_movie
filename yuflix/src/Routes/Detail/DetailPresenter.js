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
    filter: blur(3px);
    opacity: 0.3;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 40px;
`;

const Title = styled.h3`
    font-size: 32px;
    margin-bottom: 10px;
`;

const ItemContainer = styled.div`
    margin: 20px 0;
`;

const Item = styled.span`
    font-size: 18px;
`;

const Divider = styled.span`
    margin: 0 10px;
`;

const Overview = styled.p`
    font-size: 24px;
    opacity: 0.3;
    line-height: 1.5;
    width: 50%;
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
                <Data>
                    <Title>{result.original_title ? 
                        result.original_title : 
                        result.original_name}</Title>    
                    <ItemContainer>
                        <Item>{result.release_date ? 
                            result.release_date.substring(0,4) : 
                            result.first_air_date.substring(0,4)}
                        </Item>
                        <Divider>ㆍ</Divider>
                        <Item>{result.runtime ? 
                            result.runtime : 
                            result.episode_run_time[0]}분
                        </Item>
                        <Divider>ㆍ</Divider>
                        <Item>
                            {result.genres &&
                            result.genres.map((genres, index) => 
                                index === result.genres.length -1 ?
                                ` ${genres.name}` :
                                `${genres.name} /`)}
                        </Item>
                    </ItemContainer>
                    <Overview>{result.overview}</Overview>
                </Data>    
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