import * as React from 'react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export const DialogDelete = ({
    id,
    title,
}: {
    id: number;
    title: string;
}) => {
  const handleDelte = async () => {
    try {
      const response = await fetch(`/api/btob/${id}`, {
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
        <Button variant="outline" className="w-full bg-red-500 hover:bg-red-600">Suprimer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirmer la suppression</DialogTitle>
          <DialogDescription>
            id: {id} <br />
            Title: {title} <br />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="button" onClick={handleDelte}>Suprimer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
