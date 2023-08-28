import { LiaBreadSliceSolid, LiaCoffeeSolid } from 'react-icons/lia';
import { CiForkAndKnife } from 'react-icons/ci';
import { IconType } from 'react-icons';

type CategoriesMapper = {
  [key in string]: {
    icon: IconType;
  };
};

export const categoriesMapper: CategoriesMapper = {
  '1': { icon: LiaBreadSliceSolid },
  '2': { icon: CiForkAndKnife },
  '3': { icon: LiaCoffeeSolid },
};
