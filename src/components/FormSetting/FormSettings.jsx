import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Form,
  Button,
  Input,
  MainHead,
  Textarea,
  Container,
} from './FormSettings.styled';
import getHeroByID from '../../services/GET/getHeroByID';
import putHero from '../../services/PUT/putHero';

export function FormSettings({ modal, heroI }) {
  const [nickName, setNickname] = useState('');
  const [realName, setRealName] = useState('');
  const [description, setDescription] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');
  // const [heroImage, setHeroImage] = useState('');

  const { id } = useParams();

  useEffect(() => {
    getHeroByID(id).then(result => {
      setNickname(result.data.nickName);
      setRealName(result.data.realName);
      setDescription(result.data.description);
      setSuperpowers(result.data.superpowers);
      setCatchPhrase(result.data.catchPhrase);
    });
  }, [id]);

  const submitEdit = e => {
    e.preventDefault();
    const file = e.target.file.files[0];

    const dataHero = new FormData();
    dataHero.append('id', id);
    dataHero.append('nickName', nickName);
    dataHero.append('realName', realName);
    dataHero.append('description', description);
    dataHero.append('superpowers', superpowers);
    dataHero.append('catchPhrase', catchPhrase);
    dataHero.append('file', file);

    putHero(dataHero);
    heroI(true);
    modal();
  };

  const changeInput = e => {
    if (e.target.id === 'nickname') {
      setNickname(e.target.value);
    } else if (e.target.id === 'real-name') {
      setRealName(e.target.value);
    } else if (e.target.id === 'description') {
      setDescription(e.target.value);
    } else if (e.target.id === 'superpowers') {
      setSuperpowers(e.target.value);
    } else if (e.target.id === 'catch-phrase') {
      setCatchPhrase(e.target.value);
    }
  };

  return (
    <Container>
      <MainHead>Want to change something?</MainHead>
      <Form onSubmit={submitEdit} encType="multipart/form-data">
        <label htmlFor="nickname">
          <b>Nickname</b>
        </label>
        <Input
          type="text"
          name="name"
          id="nickname"
          onChange={changeInput}
          value={nickName}
          required
        />
        <label htmlFor="real-name">
          <b>Real name</b>
        </label>
        <Input
          type="text"
          name="name"
          id="real-name"
          onChange={changeInput}
          value={realName}
          required
        />
        <label htmlFor="description">
          <b>Description</b>
        </label>
        <Textarea
          type="text"
          name="name"
          id="description"
          onChange={changeInput}
          value={description}
          required
        />
        <label htmlFor="superpowers">
          <b>Superpowers</b>
        </label>
        <Textarea
          type="text"
          name="name"
          id="superpowers"
          onChange={changeInput}
          value={superpowers}
          required
        />
        <label htmlFor="catch-phrase">
          <b>Catch phrase</b>
        </label>
        <Textarea
          type="text"
          name="name"
          id="catch-phrase"
          onChange={changeInput}
          value={catchPhrase}
          required
        />
        <label htmlFor="file">
          <b>Hero image</b>
        </label>
        <input type="file" id="file" name="file" />

        <Button type="submit">Save</Button>
      </Form>
    </Container>
  );
}
