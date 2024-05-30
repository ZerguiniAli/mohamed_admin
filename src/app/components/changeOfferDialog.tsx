import * as React from 'react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export const DialogDemo = ({
    id,
    Email,
    offre: initialOffre
}: {
    id: string;
    Email: string;
    offre: string;
}) => {
  const [offre, setOffre] = useState(initialOffre);

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ offre })
      });
  
      if (!response.ok) {
        throw new Error('Failed to save the offer');
      }
  
      // Close the dialog
      const dialog = document.querySelector('dialog');
      if (dialog) {
        dialog.close();
      }
  
      // Refresh the page
      window.location.reload();
    } catch (error) {
      console.error('Error saving the offer:', error);
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOffre(event.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="py-1 px-2 bg-orange-500 hover:bg-orange-500">Changer l'offre</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            id: {id} <br />
            Email: {Email} <br />
            offre: {offre}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex w-full gap-2 items-center justify-between">
            <Label htmlFor="name" className="text-center">
              Le neveau offre
            </Label>
            <select value={offre} onChange={handleSelectChange} className="block w-[180px] py-2 pl-3 pr-10 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
              <option value="Normal">Normal</option>
              <option value="Demo">Demo</option>
              <option value="VIP">VIP</option>
            </select>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSave}>Sauvgarde</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
