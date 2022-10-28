import React from 'react';
import { useParams } from 'react-router-dom';

export default function HouseSheet() {
  const currentId = parseInt(useParams().id);
  return <div>{currentId}</div>;
}
