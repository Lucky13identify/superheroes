import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getHeroByID from '../../../services/GET/getHeroByID';
import { Section, Text, Button, Thumb, ImgList } from './HeroInfo.styled';
import { Modal } from '../../../components/Modal/Modal';
import { FormSettings } from '../../../components/FormSetting/FormSettings';

export default function HeroInfo({ heroI }) {
  const [modal, setModal] = useState(false);
  const [nickName, setNickname] = useState('');
  const [realName, setRealName] = useState('dima');
  const [description, setDescription] = useState('dima');
  const [superpowers, setSuperpowers] = useState('dima');
  const [catchPhrase, setCatchPhrase] = useState('dima');
  const [heroImage, setHeroImage] = useState('dima');

  const { id } = useParams();

  useEffect(() => {
    getHeroByID(id).then(result => {
      setNickname(result.data.nickName);
      setRealName(result.data.realName);
      setDescription(result.data.description);
      setSuperpowers(result.data.superpowers);
      setCatchPhrase(result.data.catchPhrase);
      setHeroImage(result.data.heroImage);
    });
  });

  const closeESC = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = e => {
    if (e.target.className === 'overlay css-1nljt53') {
      setModal(false);
    }
  };

  return (
    <Section>
      <Thumb>
        <ImgList src={heroImage} alt={nickName} />
      </Thumb>

      <Text>
        <p>
          <b>Nickname: </b> <i>{nickName}</i>
        </p>
        <p>
          <b> Real name: </b> <i>{realName}</i>
        </p>
        <p>
          <b> Description: </b>
          <i>{description}</i>
        </p>
        <p>
          <b>Superpowers: </b>
          <i>{superpowers}</i>
        </p>
        <p>
          <b> Catch phrase: </b>
          <i>{catchPhrase}</i>
        </p>
        <Button onClick={openModal} type="click">
          Settings
        </Button>
      </Text>
      {modal === true && (
        <Modal state={closeModal} close={closeESC}>
          <FormSettings modal={closeESC} heroI={heroI} />
        </Modal>
      )}
    </Section>
  );
}
