import styled from 'styled-components'

export const Wrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #42454e;
  padding: 1.6rem;
  border-radius: 1.2rem 1.2rem 0 0;
  width: 100%;
  max-width: 425px;
  z-index: 2;
`

export const Input = styled.input`
  background-color: #fff;
  color: #42454e;
  flex-grow: 1;
  text-align: center;
  height: 3rem;
  padding: 2rem 1.5rem;
  font-size: 1.3rem;
  border: none;
  border-radius: 1.2rem;
  @media (min-width: 425px) {
    font-size: 1.6rem;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

export const Submit = styled.input`
  background-color: #1bba9a;
  color: #fff;
  text-align: center;
  font-weight: bold;
  border-radius: 1.2rem;
  font-size: 1.3rem;
  padding: 0.4rem 1.5rem;
  transition: background-color ease 0.25s;
  margin-left: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #189e83;
  }
  @media (min-width: 320px) {
    margin-left: 0;
  }
  @media (min-width: 425px) {
    font-size: 1.6rem;
    margin-top: 0;
    margin-left: 1rem;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`
