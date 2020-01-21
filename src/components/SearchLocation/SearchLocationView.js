import React from 'react';
import styles from './SearchLocationView.module.css';
import { ReactComponent as Compass } from '../../assets/icons/compass.svg';

export const Container = ({children}) => (
  <div className={styles.container}>{children}</div>
);

export const Input = ({text, onTextChange}) => (
  <>
    <input className={styles.input}
      type='text'
      placeholder='Digite um local'
      value={text}
      onChange={event => onTextChange(event.target.value)}></input>
    <Compass className={styles.icon}></Compass>
  </>
);

export const OptionContainer = ({children}) => (
  <ul className={styles.optionList}>{children}</ul>
)

export const OptionLabel = ({children}) => (
  <span className={styles.optionLabel}>{children}</span>
)

export const OptionItem = ({children, onSelect}) => (
  <li className={styles.optionItem} onClick={() => onSelect && onSelect()}>{children}</li>
)

const SearchLocationView = ({inputText, onInputTextChange, optionList, onOptionSelect, formatOptionLabel}) => {

  return (
    <Container>
      <Input
        text={inputText}
        onTextChange={text => onInputTextChange(text)}/>
      <OptionContainer>
      {optionList && optionList.length > 0 && optionList.map((v, i) => (
        <OptionItem key={i} onSelect={() => onOptionSelect(v)}>
          <OptionLabel>{formatOptionLabel(v)}</OptionLabel>
        </OptionItem>
      ))}
      {optionList && optionList.length === 0 && (
        <OptionItem>
          <OptionLabel>Nenhuma cidade encontrada</OptionLabel>
        </OptionItem>
      )}
      </OptionContainer>
    </Container>
)};

export default SearchLocationView;