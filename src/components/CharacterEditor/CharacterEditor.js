import React from 'react';

import { defaultSkinColor, defaultClothesColor } from '../../constants';
import Character from '../Character';
import MaxWidthWrapper from '../MaxWidthWrapper';
import ControlPane from '../ControlPane';

import {
 bodyOptions,
 headOptions,
 faceOptions,
 accessoryOptions,
 skinColorOptions,
 clothesColorOptions,
} from './CharacterEditor.helpers';
import styles from './CharacterEditor.module.scss';
import Header from '../Header';

function App() {
 const [body, setBody] = React.useState(0);
 const [head, setHead] = React.useState(0);
 const [face, setFace] = React.useState(0);
 const [accessory, setAccessory] = React.useState(0);
 const [skinColor, setSkinColor] = React.useState(defaultSkinColor);
 const [clothesColor, setClothesColor] = React.useState(defaultClothesColor);

 return (
  <main className={styles['character-editor']}>
   <MaxWidthWrapper className={styles.maxWidthWrapper}>
    <Header />
    <div className={styles['control-column']}>
     <ControlPane
      title="Bodies"
      options={bodyOptions}
      currentOption={body}
      handleSelectOption={setBody}
     />
     <ControlPane
      title="Heads"
      options={headOptions}
      currentOption={head}
      handleSelectOption={setHead}
     />
     <ControlPane
      title="Faces"
      options={faceOptions}
      currentOption={face}
      handleSelectOption={setFace}
     />
     <ControlPane
      title="Accessories"
      options={accessoryOptions}
      currentOption={accessory}
      handleSelectOption={setAccessory}
     />
     <ControlPane
      title="Skin Color"
      options={skinColorOptions}
      currentOption={skinColor}
      handleSelectOption={setSkinColor}
     />
     <ControlPane
      title="Clothing Color"
      options={clothesColorOptions}
      currentOption={clothesColor}
      handleSelectOption={setClothesColor}
     />
    </div>
   </MaxWidthWrapper>

   <div className={styles['character-wrapper']}>
    <Character
     body={body}
     head={head}
     face={face}
     accessory={accessory}
     skinColor={skinColor}
     clothesColor={clothesColor}
    />
   </div>
  </main>
 );
}

export default App;
