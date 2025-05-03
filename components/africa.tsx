'use client';

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import AfricaMap from "./map";



const Africa = () => {

  const [hoveredCountryId, setHoveredCountryId] = useState<string | null>(null);



  const countryStats = [

    {
      id: 'algeria',
      name: 'Algeria',
      reponses: '21%',
      bg: 'bg-brand-orange',
    },
    {
      id: 'nigeria',
      name: 'Nigeria',
      reponses: '32%',
      bg: 'bg-brand-orange',
    },
    {
      id: 'senegal',
      name: 'Senegal',
      reponses: '2%',
      bg: 'bg-sky-200',
    },
    {
      id: 'tunisia',
      name: 'Tunisia',
      reponses: '2%',
      bg: 'bg-sky-200',
    },
    {
      id: 'south-africa',
      name: 'South Africa',
      reponses: '8% - 9%',
      bg: 'bg-green-700',
    },
    {
      id: 'drc',
      name: 'Democratic Republic of the Congo',
      reponses: '6%',
      bg: 'bg-sky-400',
    },
    {
      id: 'zambia',
      name: 'Zambia',
      reponses: '6%',
      bg: 'bg-sky-400',
    },
    {
      id: 'malawi',
      name: 'Malawi',
      reponses: '2%',
      bg: 'bg-sky-200',
    },
    {
      id: 'tanzania',
      name: 'Tanzania',
      reponses: '1%',
      bg: 'bg-zinc-300',
    },
    {
      id: 'burundi',
      name: 'Burundi',
      reponses: '1%',
      bg: 'bg-zinc-300',
    },
    {
      id: 'rwanda',
      name: 'Rwanda',
      reponses: '1%',
      bg: 'bg-zinc-200',
    },
    {
      id: 'uganda',
      name: 'Uganda',
      reponses: '1%',
      bg: 'bg-zinc-300',
    },
    {
      id: 'sudan',
      name: 'Sudan',
      reponses: '1%',
      bg: 'bg-zinc-300',
    },
    {
      id: 'south-sudan',
      name: 'South Sudan',
      reponses: '1%',
      bg: 'bg-zinc-300',
    },
    {
      id: 'somalia',
      name: 'Somalia',
      reponses: '2%',
      bg: 'bg-sky-200',
    },
    {
      id: 'cote-d-ivoire',
      name: "Côte d'Ivoire",
      reponses: '2%',
      bg: 'bg-sky-200',
    },
    {
      id: 'ghana',
      name: 'Ghana',
      reponses: '2%',
      bg: 'bg-sky-200',
    },
    {
      id: 'liberia',
      name: 'Liberia',
      reponses: '1%',
      bg: 'bg-zinc-300',
    },
    {
      id: 'burkina-faso',
      name: 'Burkina Faso',
      reponses: '1%',
      bg: 'bg-zinc-300',
    },
    {
      id: 'namibia',
      name: 'Namibia',
      reponses: '1%',
      bg: 'bg-zinc-300',
    },
    {
      id: 'mozambique',
      name: 'Mozambique',
      reponses: '1%',
      bg: 'bg-zinc-300',
    }
  ]

  const hoveredCountry = countryStats.find((country) => country.id === hoveredCountryId);



  return (
    <div className="w-full">
     <AfricaMap />
    </div>
  );
}
export default Africa;



