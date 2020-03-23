import React from 'react';

import styled from 'styled-components';


const Li = styled.li`
  padding: 5px 0;
  display: list-item;
  text-align: -webkit-match-parent;
  list-style: none;
  margin: 0;
`;

const SongDiv = styled.div`
  padding: 0;
  left: -6px;
  margin-right: -6px;
  position: relative;
  min-height: 60px;
  border-radius: 4px;
  overflow: hidden;
  `;

const AlbumArtDiv = styled.span`
  height: 50px;
  width: 50px;
  text-align: center;
  position: relative;
  background-repeat: no-repeat;
`;

const AlbumArtSpan = styled.span`
  display: inline-block;
  background: transparent 50%/contain no-repeat;
  margin-right: 4px;
  padding: 5px 6px;
  width: 50px;
  height: 50px;
  position: relative;
  float: left;
`;

const MediaInfoDiv = styled.span`
  margin-top: 4px;
  overflow: hidden;
  display: block;
`;

const AlbumImage = styled.img`
    width: 50px;
    height: 50px;
    opacity: 1;
`;

const SongArtist = styled.div`
  margin-top: 0;
  font-size: 14px;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 400;
  word-wrap: break-word;
  display: flex;
  flex: 1;
  min-width: 0;
}
`;

const ArtistDiv = styled.div`
  font-weight: 100;
  color: #999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
  cursor: pointer;
`;

const ArtistNameSpan = styled.span`
    line-height: 1;
    margin-bottom: 2px;
    text-decoration: none;
`;

const SongNameDiv = styled.div`
  height: 1.3em;
  float: left;
  text-decoration: none;
  color: #333;
  max-width: 100%;
    font-weight: 100;
    box-sizing: border-box;
`;

const SmallUl = styled.ul`

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;

`;

const SmallLi = styled.li`
`;



const LikedSong = ({song_name, artist_name, plays, likes, reposts, comments, album_art, location, artist_pic, onArtistNameClick}) => (
  <Li className='INDIVIDUALLIKEDSONGS'>
    <SongDiv className='CONTENTSOFLIKEDSONG'>
      <AlbumArtDiv>
        <AlbumArtSpan className='ALBUMART'>
          <AlbumImage src={album_art}></AlbumImage>
        </AlbumArtSpan>
      </AlbumArtDiv>

      <MediaInfoDiv className='MEDIA'>
        <SongArtist className='SONGNAMEARTISTINFO'>
          <ArtistDiv className='ARTISTNAME'>
            <ArtistNameSpan onClick={onArtistNameClick}>{artist_name}</ArtistNameSpan>
          </ArtistDiv>
          <SongNameDiv className='SONGNAME'>
            <span>{song_name}</span>
          </SongNameDiv>

        </SongArtist>

        <ul className='MORESTATS'>
          <SmallLi>plays {plays}</SmallLi>
          <SmallLi>likes {likes} </SmallLi>
          <SmallLi>reposts {reposts} </SmallLi>
          <SmallLi>comments {comments} </SmallLi>
        </ul>
      </MediaInfoDiv>
    </SongDiv>
  </Li>

);

export default LikedSong;