import styled from 'styled-components'

const toggleBackgroundColor = {
  dark: '#88e1f2',
  light: '#f78259'
}

const ToggleButton = styled.button`
  position: fixed;
  bottom: 16px;
  right: 16px;
  padding: 12px;
  border-radius: 50%;
  border: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  background-color: ${props => toggleBackgroundColor[props.theme.currentTheme]};
`

export { ToggleButton }
