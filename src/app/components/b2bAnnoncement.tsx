import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import locationIcon from "../../../public/location.png";
import calendarIcon from "../../../public/calendar.png";
import { ModifyDialog } from "./modifyb2b"
import { DialogDelete } from "./suprimerb2b";

export interface B2bService {
  id: number;
  title: string;
  description: string;
  wilaya: string;
  sectors: string;
  contact: string;
  document: string;
}

export function B2bCard({ id, title, description, wilaya, sectors, contact, document }: B2bService) {
  const [isModifyDialogOpen, setIsModifyDialogOpen] = useState(false);

  const handleModifyButtonClick = () => {
    setIsModifyDialogOpen(true);
  };

  const handleCloseModifyDialog = () => {
    setIsModifyDialogOpen(false);
  };

  return (
    <Card className="w-[350px] flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="w-full flex flex-col justify-between">
            <div className="flex gap-2">
              <Image alt="Location" src={locationIcon} className="w-6" />
              <h2 className="font-bold">Location:</h2>
            </div>
            <p className="text-end">{wilaya}</p>
          </div>
          <div className="w-full flex flex-col justify-between">
            <div className="flex gap-2">
              <Image alt="Calendar" src={calendarIcon} className="w-6" />
              <h2 className="font-bold">Sectors:</h2>
            </div>
            <p className="text-end">{sectors}</p>
          </div>
          <div className="w-full flex flex-col justify-between">
            <div className="flex gap-2">
              <h2 className="font-bold">Contact:</h2>
            </div>
            <p className="text-end">{contact}</p>
          </div>
          <div className="w-full flex flex-col justify-between">
            <div className="flex gap-2">
              <h2 className="font-bold">Document:</h2>
            </div>
            <p className="text-end">{document}</p>
          </div>
          <div className="py-2 px-2 rounded-lg bg-slate-100 w-full">
            <p className="text-center break-words">{description}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 justify-between">
      <ModifyDialog
          id={id}
          title={title}
          description={description}
          wilaya={wilaya}
          sectors={sectors}
          contact={contact}
          document={document}
          onClose={handleCloseModifyDialog}
          onSave={() => {}} // Define your onSave function here
        />
        <DialogDelete
            id={id}
            title={title}
        />
      </CardFooter>
    </Card>
  );
}
