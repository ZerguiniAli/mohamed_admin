// User.tsx
import React from 'react';
import { DialogDemo } from './changeOfferDialog';
import { DialogDelete } from './deleteDailog';

type UserProps = {
    id: number;
    Societe: string;
    Nom: string;
    Email: string;
    Telephone: string;
    Region: string;
    Nom_utilisateurs: string;
    Creer: string;
    Offre: string;
};
  
const User: React.FC<UserProps> = ({ id, Societe, Nom, Email, Telephone, Region, Nom_utilisateurs, Creer, Offre}) => {


  return (
    <div className='py-3 px-4 bg-gray-200 flex justify-start items-center rounded-md gap-5 flex-wrap'>
      <div className='flex gap-2 bg-white py-1 px-2 rounded-sm '>
        <h1 className='font-bold text-sm'>id :</h1>
        <p className='text-sm'>{id}</p>
      </div>
      <div className='flex gap-2 bg-white py-1 px-2 rounded-sm'>
        <h1 className='font-bold text-sm'>Societe :</h1>
        <p className='text-sm'>{Societe}</p>
      </div>
      <div className='flex gap-2 bg-white py-1 px-2 rounded-sm'>
        <h1 className='font-bold text-sm'>Nom :</h1>
        <p className='text-sm'>{Nom}</p>
      </div>
      <div className='flex gap-2 bg-white py-1 px-2 rounded-sm'>
        <h1 className='font-bold text-sm'>Email :</h1>
        <p className='text-sm'>{Email}</p>
      </div>
      <div className='flex gap-2 bg-white py-1 px-2 rounded-sm'>
        <h1 className='font-bold text-sm'>Telephone :</h1>
        <p className='text-sm'>{Telephone}</p>
      </div>
      <div className='flex gap-2 bg-white py-1 px-2 rounded-sm'>
        <h1 className='font-bold text-sm'>Region :</h1>
        <p className='text-sm'>{Region}</p>
      </div>
      <div className='flex gap-2 bg-white py-1 px-2 rounded-sm'>
        <h1 className='font-bold text-sm'>nom utilisateurs :</h1>
        <p className='text-sm'>{Nom_utilisateurs}</p>
      </div>
      <div className='flex gap-2 bg-white py-1 px-2 rounded-sm'>
        <h1 className='font-bold text-sm'>Creer a :</h1>
        <p className='text-sm'>{Creer}</p>
      </div>
      <div className='flex gap-2 bg-white py-1 px-2 rounded-sm'>
        <h1 className='font-bold text-sm'>Offre :</h1>
        <p className='text-sm'>{Offre}</p>
      </div>
      <DialogDemo id={id.toString()} Email={Email} offre={Offre}/>
      <DialogDelete id={id.toString()} Email={Email}/>
    </div>
  );
};

export default User;
