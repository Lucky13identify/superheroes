import { useState } from 'react';
import {
  Form,
  Button,
  Input,
  MainHead,
  Textarea,
  Label,
} from './HeroForm.styled';
import postNewHero from '../../services/POST/postNewHero';

export default function HeroForm({ hero }) {
  const [nickName, setNickname] = useState('');
  const [realName, setRealName] = useState('');
  const [description, setDescription] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');

  const onSubmitForm = async e => {
    const file = e.target.file.files[0];

    e.preventDefault();

    const data = new FormData();
    data.append('file', file);
    data.append('nickName', nickName);
    data.append('realName', realName);
    data.append('description', description);
    data.append('superpowers', superpowers);
    data.append('catchPhrase', catchPhrase);

    await postNewHero(data).then(res => {
      if ((res.message = 'Superhero created')) {
        hero(true);
      }
    });

    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
    e.target[3].value = '';
    e.target[4].value = '';
    e.target[5].value = '';
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
    } else if (e.target.id === 'catchPhrase') {
      setCatchPhrase(e.target.value);
    }
  };

  return (
    <section className="hero-form">
      <MainHead>Create your hero!</MainHead>
      <Form onSubmit={onSubmitForm} encType="multipart/form-data">
        <Label htmlFor="nickname">
          <b>Nickname</b>
        </Label>
        <Input
          onChange={changeInput}
          type="text"
          name="name"
          id="nickname"
          required
        />
        <Label htmlFor="real-name">
          <b>Real name</b>
        </Label>
        <Input
          onChange={changeInput}
          type="text"
          name="name"
          id="real-name"
          required
        />
        <Label htmlFor="description">
          <b>Description</b>
        </Label>
        <Textarea
          onChange={changeInput}
          type="text"
          name="name"
          id="description"
          required
        />
        <Label htmlFor="superpowers">
          <b>Superpowers</b>
        </Label>
        <Textarea
          onChange={changeInput}
          type="text"
          name="name"
          id="superpowers"
          required
        />
        <Label htmlFor="catch-phrase">
          <b>Catch phrase</b>
        </Label>
        <Textarea
          onChange={changeInput}
          type="text"
          name="name"
          id="catch-phrase"
          required
        />
        <Label htmlFor="file">
          <b>Hero image</b>
        </Label>
        <input type="file" id="file" name="file" />

        <Button type="submit">Add a hero!</Button>
      </Form>
    </section>
  );
}
