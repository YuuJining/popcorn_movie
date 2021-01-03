import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from 'styled-components';

const Header = styled.header `
    color: white;
    top: 500;
    left: 100;
    width: 300px;
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

const ContentHeader = ({ id, isMovie=true  }) => (
    <Header>
        <List>
            <Item>
                <SLink to={isMovie ? `/movie/${id}` : `/show/${id}`}>
                    기본정보
                </SLink>
            </Item>
            <Item>
                <SLink to={isMovie ? `/movie/${id}/credits` : `/show/${id}/credits`}>
                    참여
                </SLink>
            </Item>
            <Item>
                <SLink to={isMovie ? `/movie/${id}/videos` : `/show/${id}/videos`}>
                    동영상
                </SLink>
            </Item>
        </List>
    </Header>
);

ContentHeader.propTypes = {
    id: PropTypes.number.isRequired,
    isMovie: PropTypes.bool
};

export default ContentHeader;