'use client'
import React, { useEffect, useState } from 'react';
import User from './components/User';

interface User {
  id: number;
  societe: string;
  Non: string;
  Email: string;
  Telephone: string;
  Region: string;
  Nomutil: string;
  createdAt: string; // Assuming createdAt is a string
  offre: string;
}
import { DialogDemo } from './components/changeOfferDialog';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-screen w-full py-5 px-5 flex flex-col gap-5">
      <div className="w-full flex items-center justify-center">
        <h1 className="font-bold text-xl">Les utilisateurs</h1>
      </div>
      <div className="flex flex-col gap-2 overflow-y-scroll h-full">
        {users.map(user => (
         <User
         key={user.id}
         id={user.id}
         Societe={user.societe}
         Nom={user.Non}
         Email={user.Email}
         Telephone={user.Telephone}
         Region={user.Region}
         Nom_utilisateurs={user.Nomutil}
         Creer={user.createdAt}
         Offre={user.offre}
       />       
        ))}
      </div>
    </div>
  );
}
