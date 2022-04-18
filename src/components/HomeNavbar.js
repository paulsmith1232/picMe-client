import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

const HomeNavbar = () => {
  const [activeItem, setActiveItem] = useState('explore');
  const handleItemClick = (e, { name }) => setActiveItem( name );

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name='explore'
          active={activeItem === 'explore'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='following'
          active={activeItem === 'following'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='favourites'
          active={activeItem === 'favourites'}
          onClick={handleItemClick}
        />
      </Menu>
    </div>
  )    
};

export default HomeNavbar;