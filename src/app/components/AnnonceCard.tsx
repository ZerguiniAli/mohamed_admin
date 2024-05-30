import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import position from "../../../public/location.png";
import calendar from "../../../public/calendar.png";
import { ModifyDialog } from "./modifierAnnonce";
import { DialogDelete } from "./suprimerAnnonce";

export interface Annonce {
  id: number;
  title: string;
  description: string;
  wilaya: string;
  type: string;
  date_preemption: string;
  sectors: string;
}

export function AnnonceCard({ id, title, wilaya, date_preemption, type,description, sectors }: Annonce) {
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
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="w-full flex flex-col justify-between">
            <div className="flex gap-2">
              <Image alt="calendar" src={position} className="w-6" />
              <h2 className="font-bold">Emplacement :</h2>
            </div>
            <p className="text-end">{wilaya}</p>
          </div>
          <div className="w-full flex flex-col justify-between">
            <div className="flex gap-2">
              <Image alt="calendar" src={calendar} className="w-6" />
              <h2 className="font-bold">Date de péremption :</h2>
            </div>
            <p className="text-end">{date_preemption}</p>
          </div>
          <div className="py-2 px-2 rounded-lg bg-slate-100 w-full">
            <p className="text-center break-words">
              {description}
            </p>
          </div>
          <div className="w-full">
            <h4 className="font-bold">type:</h4>
            <p>
              {type}
            </p>
          </div>
          <div className="w-full">
            <h4 className="font-bold">Secteur(s):</h4>
            <p>
              {sectors}
            </p>
          </div>
        </div>
      </CardContent>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 justify-between">
      <ModifyDialog
          id={id}
          title={title}
          wilaya={wilaya}
          description={description}
          sectors={sectors}
          date_preemption={date_preemption}
          type={type} onClose={function (): void {
            throw new Error("Function not implemented.");
          } } onSave={function (modifiedAnnonce: Annonce): void {
            throw new Error("Function not implemented.");
          } }        />
        <DialogDelete id={id} title={title}/>
      </CardFooter>
    </Card>
  );
}
