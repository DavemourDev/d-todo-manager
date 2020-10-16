import React from 'react';
import { Dialog } from '../content/Dialog';
import { DateSelector } from '../selectors/DateSelector';

type DateTodoListDialogProps = {
  active: boolean;
  onSelectDate: (date: Date) => void;
  onClose: () => void;
};

export const DateTodoListDialog = ({ active, onSelectDate, onClose }: DateTodoListDialogProps) => {

  const selectDateHandler = (date: Date) => {
    onSelectDate(date);
    onClose();
  };

  return (
    <Dialog isOpen={ active } onClose={ onClose }>
      <h2>Abrir tareas para fecha</h2>
      <DateSelector onChange={ selectDateHandler } />
    </Dialog>
  );
}