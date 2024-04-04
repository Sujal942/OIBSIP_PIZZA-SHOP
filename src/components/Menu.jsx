import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import MenuCard from './MenuCard'; // Importing MenuCard component

import { masterListState } from '../state';

import Data from './data.json';

const Menu = () => {
  const setMasterData = useSetRecoilState(masterListState);

  useEffect(() => {
    localStorage.setItem('master', JSON.stringify(Data));

    setMasterData(Data);
  }, [setMasterData]);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ml-20 gap-9'>
      {Data.map((pizza) => (
        <MenuCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Menu;
