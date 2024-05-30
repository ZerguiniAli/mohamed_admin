import * as React from 'react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export const DialogDelete = ({
    id,
    Email,
}: {
    id: string;
    Email: string;
}) => {
  const handleDelte = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to Delete');
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


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="py-1 px-2 bg-red-600 hover:bg-red-600">Suprimer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirmer la suppression</DialogTitle>
          <DialogDescription>
            id: {id} <br />
            Email: {Email} <br />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="button" onClick={handleDelte}>Suprimer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
