'use client'
import React, { useState, useEffect } from 'react';
import { AnnonceCard } from '../components/AnnonceCard';
import { AnnonceDialog } from '../components/annonceCreateDialog';

interface Annonce {
  id: number;
  title: string;
  wilaya: string;
  date_preemption: string;
  description: string;
  type: string
  sectors: string;
}

const Page = () => {
  const [annonces, setAnnonces] = useState<Annonce[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/annonce')
      .then(response => response.json())
      .then(data => {
        setAnnonces(data as Annonce[]);
      })
      .catch(error => console.error('Error fetching annonces:', error));
  }, []);

  return (
    <div className='h-screen w-full py-5 px-5 flex flex-col gap-5'>
      <div className='w-full flex items-center justify-center'>
        <h1 className='font-bold text-xl'>Annonce</h1>
      </div>
      <div>
        <AnnonceDialog/>
      </div>
      <div className='w-full flex flex-wrap items-center justify-center gap-10 overflow-y-scroll'>
        {annonces.map(annonce => (
          <AnnonceCard
            key={annonce.id}
            id={annonce.id}
            title={annonce.title}
            wilaya={annonce.wilaya}
            date_preemption={annonce.date_preemption}
            description={annonce.description}
            sectors={annonce.sectors}
            type={annonce.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
