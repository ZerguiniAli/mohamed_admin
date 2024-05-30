'use client'
import React, { ChangeEvent, useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from '@/components/ui/input';

export const B2bDialog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [document, setDocument] = useState('');
  const [contact, setContact] = useState('');
  const [selectedWilaya, setSelectedWilaya] = useState('');
  const [selectedSectors, setSelectedSectors] = useState('');

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);
  const handleDocumentChange = (e: ChangeEvent<HTMLInputElement>) => setDocument(e.target.value);
  const handleContactChange = (e: ChangeEvent<HTMLInputElement>) => setContact(e.target.value);
  const handleWilayaChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectedWilaya(e.target.value);
  const handleSectorsChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectedSectors(e.target.value);

  const handleSave = async () => {
    try {
      const response = await fetch('/api/btob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title, // Include the title field
          description: description,
          wilaya: selectedWilaya,
          sectors: selectedSectors,
          Contact: contact,
          document: document
        }),
      });
  
      if (response.ok) {
        console.log('B2b created successfully');
        // Close the dialog
        // Reload the page
        window.location.reload();
      } else {
        // Log error response
        const errorResponse = await response.json();
        console.error('Failed to create b2b:', errorResponse);
      }
    } catch (error) {
      console.error('Error creating b2b:', error);
    }
  };
  

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className='bg-gray-800 hover:bg-gray-900 text-white'>Create B2B</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create B2B</DialogTitle>
        </DialogHeader>
        <div className='flex flex-col gap-4'>
          <div className='w-full flex flex-col gap-2'>
            <Label>Title</Label>
            <Input value={title} onChange={handleTitleChange} />
          </div>
          <div className='w-full flex flex-col gap-1'>
            <Label>Description</Label>
            <Input value={description} onChange={handleDescriptionChange} />
          </div>
          <div className='w-full flex items-center gap-1 justify-between'>
            <Label>Wilaya</Label>
            <select value={selectedWilaya} onChange={handleWilayaChange} className="block w-[180px] py-2 pl-3 pr-10 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select Wilaya</option>
          <option value="Adrar">Adrar</option>
          <option value="Chlef">Chlef</option>
          <option value="Laghouat">Laghouat</option>
          <option value="Oum El Bouaghi">Oum El Bouaghi</option>
          <option value="Batna">Batna</option>
          <option value="Béjaïa">Béjaïa</option>
          <option value="Biskra">Biskra</option>
          <option value="Béchar">Béchar</option>
          <option value="Blida">Blida</option>
          <option value="Bouira">Bouira</option>
          <option value="Tamanrasset">Tamanrasset</option>
          <option value="Tébessa">Tébessa</option>
          <option value="Tlemcen">Tlemcen</option>
          <option value="Tiaret">Tiaret</option>
          <option value="Tizi Ouzou">Tizi Ouzou</option>
          <option value="Alger">Alger</option>
          <option value="Djelfa">Djelfa</option>
          <option value="Jijel">Jijel</option>
          <option value="Sétif">Sétif</option>
          <option value="Saïda">Saïda</option>
          <option value="Skikda">Skikda</option>
          <option value="Sidi Bel Abbès">Sidi Bel Abbès</option>
          <option value="Annaba">Annaba</option>
          <option value="Guelma">Guelma</option>
          <option value="Constantine">Constantine</option>
          <option value="Médéa">Médéa</option>
          <option value="Mostaganem">Mostaganem</option>
          <option value="M'Sila">M'Sila</option>
          <option value="Mascara">Mascara</option>
          <option value="Ouargla">Ouargla</option>
          <option value="Oran">Oran</option>
          <option value="El Bayadh">El Bayadh</option>
          <option value="Illizi">Illizi</option>
          <option value="Bordj Bou Arreridj">Bordj Bou Arreridj</option>
          <option value="Boumerdès">Boumerdès</option>
          <option value="El Tarf">El Tarf</option>
          <option value="Tindouf">Tindouf</option>
          <option value="Tissemsilt">Tissemsilt</option>
          <option value="El Oued">El Oued</option>
          <option value="Khenchela">Khenchela</option>
          <option value="Souk Ahras">Souk Ahras</option>
          <option value="Tipaza">Tipaza</option>
          <option value="Mila">Mila</option>
          <option value="Aïn Defla">Aïn Defla</option>
          <option value="Naâma">Naâma</option>
          <option value="Aïn Témouchent">Aïn Témouchent</option>
          <option value="Ghardaïa">Ghardaïa</option>
          <option value="Relizane">Relizane</option>
          <option value="Timimoun">Timimoun</option>
          <option value="Bordj Badji Mokhtar">Bordj Badji Mokhtar</option>
          <option value="Ouled Djellal">Ouled Djellal</option>
          <option value="Béni Abbès">Béni Abbès</option>
          <option value="In Salah">In Salah</option>
          <option value="In Guezzam">In Guezzam</option>
          <option value="Touggourt">Touggourt</option>
          <option value="Djanet">Djanet</option>
          <option value="El M'Ghair">El M'Ghair</option>
          <option value="El Meniaa">El Meniaa</option>
            </select>
          </div>
          <div className='w-full flex items-center gap-1 justify-between'>
            <Label>Sector</Label>
            <select value={selectedSectors} onChange={handleSectorsChange} className="block w-[180px] py-2 pl-3 pr-10 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select Sector</option>
          <option value="Électroménager">Électroménager</option>
          <option value="Énergie et services pétroliers">Énergie et services pétroliers</option>
          <option value="Équipements industriels">Équipements industriels</option>
          <option value="Équipements scientifiques">Équipements scientifiques</option>
          <option value="Industrie électrique électrotechnique et équipements">Industrie électrique électrotechnique et équipements</option>
          <option value="Travaux de montage de charpente métallique">Travaux de montage de charpente métallique</option>
          <option value="Automatismes et informatique industrielle">Automatismes et informatique industrielle</option>
          <option value="Décoration intérieur, extérieur et design">Décoration intérieur, extérieur et design</option>
          <option value="Trousseaux et mobilier scolaire">Trousseaux et mobilier scolaire</option>
          <option value="Mine, agrégats et granulats">Mine, agrégats et granulats</option>
          <option value="Ustensile et mobilier de cuisine">Ustensile et mobilier de cuisine</option>
          <option value="Logiciels et matériel informatique">Logiciels et matériel informatique</option>
            </select>
          </div>
          <div className='w-full flex flex-col gap-1'>
            <Label>Contact</Label>
            <Input value={contact} onChange={handleContactChange} />
          </div>
          <div className='w-full flex flex-col gap-1'>
            <Label>Document</Label>
            <Input value={document} onChange={handleDocumentChange} />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
