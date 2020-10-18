import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { DICTIONARY_MAPPING } from '../../helpers/dictionary';
import { Dialog } from '../content/Dialog';
import { DateSelector } from '../selectors/DateSelector';

type DateTodoListDialogProps = {
  active: boolean;
  onSelectDate: (date: Date) => void;
  onClose: () => void;
};

export const DateTodoListDialog = ({ active, onSelectDate, onClose }: DateTodoListDialogProps) => {

  const context = useContext(TodoContext)
  const dictionary = DICTIONARY_MAPPING(context.settings.language);

  const selectDateHandler = (date: Date) => {
    onSelectDate(date);
    onClose();
  };

  return (
    <Dialog isOpen={ active } onClose={ onClose }>
      <h2>{ dictionary.openTodosForDateTitle }</h2>
      <DateSelector label={dictionary.date } onChange={ selectDateHandler } />
    </Dialog>
  );
}