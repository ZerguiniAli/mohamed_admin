'use client'
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from '@/components/ui/input';

export const AnnonceDialog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedWilaya, setSelectedWilaya] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedSectors, setSelectedSectors] = useState<string>('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleWilayaChange = (selectedValue: string) => {
    console.log('Selected Wilaya:', selectedValue);
    setSelectedWilaya(selectedValue);
  };

  const handleTypeChange = (selectedValue: string) => {
    console.log('Selected Type:', selectedValue);
    setSelectedType(selectedValue);
  };

  const handleSectorsChange = (selectedValue: string) => {
    console.log('Selected Sectors:', selectedValue);
    setSelectedSectors(selectedValue);
  };

  const handleSave = async () => {
    try {
      console.log('Selected Data:');
      console.log('Title:', title);
      console.log('Description:', description);
      console.log('Wilaya:', selectedWilaya); // Log the selected wilaya
      console.log('Type:', selectedType); // Log the selected type
      console.log('Sectors:', selectedSectors); // Log the selected sectors

      const response = await fetch('/api/annonce', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          wilaya: selectedWilaya,
          type: selectedType,
          sectors: selectedSectors,
          date_preemption: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        console.log('Annonce created successfully');
      } else {
        console.error('Failed to create annonce');
      }
    } catch (error) {
      console.error('Error creating annonce:', error);
    }
  };


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className='bg-gray-800 hover:bg-gray-900 text-white'>Creer une annonce</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Creer une annonce</DialogTitle>
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
            <Label> Type </Label>
            <select value={selectedType} onChange={(e) => handleTypeChange(e.target.value)} className="block w-[180px] py-2 pl-3 pr-10 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="L’appel d’offres national ouvert">L’appel d’offres national ouvert</option>
<option value="L’appel d’offres international ouvert">L’appel d’offres international ouvert</option>
<option value="L’appel d’offres national restreint">L’appel d’offres national restreint</option>
<option value="L’appel d’offres international restreint">L’appel d’offres international restreint</option>
<option value="L’appel d’offres national et international ouvert">L’appel d’offres national et international ouvert</option>
<option value="L’appel d’offres national et international restreint">L’appel d’offres national et international restreint</option>

<option value="Concours national ouvert">Concours national ouvert</option>
<option value="Concours international ouvert">Concours international ouvert</option>
<option value="Concours national restreint">Concours national restreint</option>
<option value="Concours international restreint">Concours international restreint</option>
<option value="Concours national et international ouvert">Concours national et international ouvert</option>
<option value="Concours national et international restreint">Concours national et international restreint</option>

<option value="Consultation nationale ouverte">Consultation nationale ouverte</option>
<option value="Consultation internationale ouverte">Consultation internationale ouverte</option>
<option value="Consultation nationale restreinte">Consultation nationale restreinte</option>
<option value="Consultation internationale restreinte">Consultation internationale restreinte</option>
<option value="Consultation nationale et internationale ouverte">Consultation nationale et internationale ouverte</option>
<option value="Consultation nationale et internationale restreinte">Consultation nationale et internationale restreinte</option>

<option value="Présélection nationale ouverte">Présélection nationale ouverte</option>
<option value="Présélection internationale ouverte">Présélection internationale ouverte</option>
<option value="Présélection nationale restreinte">Présélection nationale restreinte</option>
<option value="Présélection internationale restreinte">Présélection internationale restreinte</option>
<option value="Présélection nationale et internationale ouverte">Présélection nationale et internationale ouverte</option>
<option value="Présélection nationale et internationale restreinte">Présélection nationale et internationale restreinte</option>
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
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSave}>Sauvegarde</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
