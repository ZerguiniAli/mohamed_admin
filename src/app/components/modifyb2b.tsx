import React, { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from '@/components/ui/input';
import { B2bService } from './b2bAnnoncement';// Import Annonce interface from Annonce.tsx

interface ModifyDialogProps extends B2bService {
  onClose: () => void; // Function to handle closing the dialog
  onSave: (modifiedAnnonce: B2bService) => void;
}

export const ModifyDialog: React.FC<ModifyDialogProps> = ({ id, title, wilaya, description, sectors, contact,document, onClose, onSave }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newSelectedWilaya, setNewSelectedWilaya] = useState<string>(wilaya);
    const [newDocument, setNewDocument]=useState<string>(document)
    const [newSelectedSectors, setNewSelectedSectors] = useState<string>(sectors);
    const [newSelectedContact, setNewSelectedContact] = useState<string>(contact); // State variable for contact

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewTitle(e.target.value);
    };
  
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewDescription(e.target.value);
    };
  
    const handleWilayaChange = (selectedValue: string) => {
      setNewSelectedWilaya(selectedValue);
    };
  
    const handleSectorsChange = (selectedValue: string) => {
      setNewSelectedSectors(selectedValue);
    };
  
    const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewDocument(e.target.value);
    };
  
    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewSelectedContact(e.target.value);
    };
  
    const handleSave = async () => {
        try {
          const modifiedAnnonce: B2bService = {
              id,
              title: newTitle,
              wilaya: newSelectedWilaya,
              description: newDescription,
              sectors: newSelectedSectors,
              contact: newSelectedContact,
              document: newDocument,
          };
      
          // Make the API call to save the modified announcement
          const response = await fetch(`/api/btob/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(modifiedAnnonce),
          });
      
          if (!response.ok) {
            throw new Error('Failed to modify announcement');
          }
      
          // Call onSave to update state or perform any necessary actions
          onSave(modifiedAnnonce);
      
          // Close the dialog
          onClose();
      
          // Reload the page
          window.location.reload();
        } catch (error) {
          console.error('Error modifying announcement:', error);
        }
      };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className='bg-orange-500 hover:bg-orange-600 w-full hover:text-white text-white'>Modifier</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Modifier l'annonce</DialogTitle>
        </DialogHeader>
        <div className='flex flex-col gap-4'>
          <div className='w-full flex flex-col gap-2'>
            <Label> Titre </Label>
            <Input value={newTitle} onChange={handleTitleChange} />
          </div>
          <div className='w-full flex flex-col gap-1'>
            <Label> Description </Label>
            <Input value={newDescription} onChange={handleDescriptionChange} />
          </div>
          <div className='w-full flex items-center gap-1 justify-between'>
            <Label> Wilaya </Label>
            <select value={newSelectedWilaya} onChange={(e) => handleWilayaChange(e.target.value)} className="block w-[180px] py-2 pl-3 pr-10 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
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
            <Label> Secteur </Label>
            <select value={newSelectedSectors} onChange={(e) => handleSectorsChange(e.target.value)} className="block w-[180px] py-2 pl-3 pr-10 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
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
          <div className='w-full flex items-center gap-1 justify-between'>
          <div className='w-full flex flex-col gap-1'>
            <Label>Document</Label>
            <Input value={document} onChange={handleDocumentChange} />
          </div>
          </div>
          <div className='w-full flex flex-col gap-1'>
            <Label> Contact </Label>
            <Input value={newSelectedContact} onChange={handleContactChange} />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSave}>Sauvegarde</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

