import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {
  ListContainer,
  Button,
  Section,
  ContainerUl,
  ImgList,
  Thumb,
} from './HeroesList.styled';

export default function HeroesList({ heroes, onDelete, pageP, items }) {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    pageP(page);
  };
  return (
    <Section className="hero-list">
      <ContainerUl>
        {heroes &&
          heroes.map(hero => {
            return (
              <ListContainer key={hero.id}>
                <Thumb className="thumb">
                  <NavLink to={`${hero.id}`}>
                    <ImgList alt={hero.nickName} src={hero.heroImage} />
                  </NavLink>
                </Thumb>
                {/* <div
                style={{
                  backgroundColor: 'grey',
                  width: '200px',
                  height: '200px',
                }}
              >
                image
              </div> */}
                <NavLink to={`${hero.id}`}>
                  <b>Nickname</b>: {hero.nickName}
                </NavLink>
                <Button type="click" onClick={() => onDelete(hero.id)}>
                  Delete
                </Button>
              </ListContainer>
            );
          })}
      </ContainerUl>

      <Stack marginTop={3} spacing={2}>
        <Pagination
          count={items}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </Section>
  );
}
