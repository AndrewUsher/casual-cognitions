/* @jsx jsx */
import { useState } from 'react'
import { jsx, useThemeUI } from 'theme-ui'

const SocialIconStyles = {
  link: {
    color: 'inherit'
  }
}

const SocialIcon = ({ to, Icon }) => {
  const { theme } = useThemeUI()
  console.log(theme.colors)
  const [hovered, setHovered] = useState(false)
  const toggleHover = () => setHovered(s => !s)
  const iconFill = hovered ? '#7579e7' : theme.colors.primary
  return (
    <a
      href={to}
      sx={SocialIconStyles.link}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
      <Icon fill={iconFill} size={30} />
    </a>
  )
}

export { SocialIcon }
