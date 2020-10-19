import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { IDictionary } from '../../helpers/dictionary/IDictionary';
import { capitalize } from '../../helpers/string-helpers';
import { Dialog } from '../content/Dialog';
import { DateSelector } from '../selectors/DateSelector';

type DateTodoListDialogProps = {
  active: boolean;
  onSelectDate: (date: Date) => void;
  onClose: () => void;
};

export const DateTodoListDialog = ({ active, onSelectDate, onClose }: DateTodoListDialogProps) => {

  const context = useContext(TodoContext)
  const dictionary: IDictionary = context.dictionary;

  const selectDateHandler = (date: Date) => {
    onSelectDate(date);
    onClose();
  };

  return (
    <Dialog isOpen={ active } onClose={ onClose }>
      <h2>{dictionary.menu.dailyTodoLists}</h2>
      <p>{dictionary.descriptions.dailyTodoLists}</p>
      <DateSelector label={ capitalize(dictionary.terms.date) } onChange={ selectDateHandler } />
    </Dialog>
  );
}