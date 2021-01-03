import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import ContentHeader from "Components/ContentHeader";
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
    border-radius: 8px;
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
    opacity: 0.5;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 40px;
`;

const Title = styled.h3`
    font-size: 45px;
    margin-bottom: 10px;
`;

const ItemContainer = styled.div`
    margin: 30px 0;
`;

const ContentContainer = styled.div`
    margin: 30px 0;
`;

const Item = styled.span`
    font-size: 18px;
    opacity: 0.7;
`;

const Divider = styled.span`
    margin: 0 10px;
    font-size: 18px;
    opacity: 0.7;
`;

const Overview = styled.p`
    font-size: 24px;
    opacity: 0.3;
    line-height: 1.5;
    width: 50%;
`;

const DetailPresenter = ({ result, error, loading, isMovie }) => (
    loading ? ( 
        <>
            <Helmet>
                <title>Loading | Yuflix</title>
            </Helmet>
            <Loader /> 
        </>
        ) : (
        <Container>
            <Helmet>
                <title>{result.title ? result.title : result.name} | Yuflix</title>
            </Helmet>
            <Backdrop 
                bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}/>
            <Content>
                <Cover 
                    bgImage={
                        result.poster_path ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
                        : "/noPosterSmall.PNG"
                    } />
                <Data>
                    <Title>
                        {result.title ? result.title : result.name}
                    </Title>    
                    <ItemContainer>
                        <Item>{isMovie ? "영화" : "TV"}</Item>
                        <Divider> | </Divider>
                        <Item>{result.original_title ? 
                            result.original_title : 
                            result.original_name}
                        </Item>
                        <Divider> | </Divider>
                        <Item>
                            {result.release_date ? 
                            result.release_date.substring(0,4) : 
                            result.first_air_date.substring(0,4)}
                        </Item>
                    </ItemContainer>
                    <ContentContainer>
                        { isMovie ? <ContentHeader id={result.id} isMovie={true}/>
                                : <ContentHeader id={result.id} isMovie={false} />
                        }
                    </ContentContainer>
                    <Overview>{result.overview ? result.overview : `상세 정보가 없습니다.`}</Overview>
                </Data>    
            </Content>
        </Container>
    )
);

DetailPresenter.prototype = {
    result:PropTypes.object,
    error:PropTypes.string,
    isMovie:PropTypes.bool.isRequired,
    loading:PropTypes.bool.isRequired
};

export default DetailPresenter;

/*
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
*/ 
/*
import React from "react";
import { Link,withRouter } from "react-router-dom";
import styled from 'styled-components';

const Header = styled.header `
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    background-color: rgba(20,20,20,0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);
`;

const List = styled.ul`
    display:flex;
`;

const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    font-size: 20px;
    border-bottom: 3px solid
     ${props => (props.current ? "#E50914" : "transparent")};
    transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default withRouter(({location: {pathname} }) => (
    <Header>
        <List>
            <Item current={pathname==="/"}>
                <SLink to="/">영화</SLink>
            </Item>
            <Item current={pathname==="/tv"}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname==="/search"}>
                <SLink to="/search">검색</SLink>
            </Item>
        </List>
    </Header>
    ));
*/