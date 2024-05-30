'use client'
import React, { useEffect, useState } from 'react';
import { B2bDialog } from '../components/CreateB2bService';
import { B2bCard } from '../components/b2bAnnoncement';

// Define an interface for B2bService
interface B2bService {
  id: number;
  title: string;
  description: string;
  wilaya: string;
  sectors: string;
  Contact: string;
  document: string;
}

const Page = () => {
  const [b2bServices, setB2bServices] = useState<B2bService[]>([]);

  useEffect(() => {
    // Fetch B2B services data from API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/btob');
        if (response.ok) {
          const data = await response.json();
          setB2bServices(data);
        } else {
          console.error('Failed to fetch B2B services data');
        }
      } catch (error) {
        console.error('Error fetching B2B services:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen w-full py-5 px-5 flex flex-col gap-5">
      <div className="w-full flex items-center justify-center">
        <h1 className="font-bold text-xl">B2bService</h1>
      </div>
      <div>
        <B2bDialog />
      </div>
      <div className="w-full flex flex-wrap items-center justify-center gap-10 overflow-y-scroll">
        {b2bServices.map((b2bService) => (
          <B2bCard
            key={b2bService.id}
            id={b2bService.id} // Pass the correct id value
            title={b2bService.title}
            description={b2bService.description}
            wilaya={b2bService.wilaya}
            sectors={b2bService.sectors}
            contact={b2bService.Contact}
            document={b2bService.document}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
