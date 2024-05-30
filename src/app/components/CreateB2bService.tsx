'use client'
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from '@/components/ui/input';

export const B2bDialog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [Document, setDocument] = useState('');
  const [Contact, setContact] = useState('');
  const [selectedWilaya, setSelectedWilaya] = useState<string>('');
  const [selectedSectors, setSelectedSectors] = useState<string>('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocument(e.target.value);
  };
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact(e.target.value);
  };

  const handleWilayaChange = (selectedValue: string) => {
    console.log('Selected Wilaya:', selectedValue);
    setSelectedWilaya(selectedValue);
  };

  const handleSectorsChange = (selectedValue: string) => {
    console.log('Selected Sectors:', selectedValue);
    setSelectedSectors(selectedValue);
  };

  const handleSave = async () => {
    try {
      // Existing code...
      const response = await fetch('http://localhost:3001/api/b2b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          description: description,
          wilaya: selectedWilaya,
          sectors: selectedSectors,
          Contact: Contact,
          document: Document,
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
        <Button variant="outline" className='bg-gray-800 hover:bg-gray-900 text-white'>Creer b2b</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Creer B2b</DialogTitle>
        </DialogHeader>
        <div className='flex flex-col gap-4'>
          <div className='w-full flex flex-col gap-2'>
            <Label> Titre </Label>
            <Input value={title} onChange={handleTitleChange} />
          </div>
          <div className='w-full flex flex-col gap-1'>
            <Label> Description </Label>
            <Input value={description} onChange={handleDescriptionChange} />
          </div>
          <div className='w-full flex items-center gap-1 justify-between'>
            <Label> Wilaya </Label>
            <select value={selectedWilaya} onChange={(e) => handleWilayaChange(e.target.value)} className="block w-[180px] py-2 pl-3 pr-10 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
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
            <Label> Secteur </Label>
            <select value={selectedSectors} onChange={(e) => handleSectorsChange(e.target.value)} className="block w-[180px] py-2 pl-3 pr-10 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
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
            <Label> Contact </Label>
            <Input value={Contact} onChange={handleContactChange} />
          </div>
          <div className='w-full flex flex-col gap-1'>
            <Label> Document </Label>
            <Input value={Document} onChange={handleDocumentChange} />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSave}>Sauvegarde</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
