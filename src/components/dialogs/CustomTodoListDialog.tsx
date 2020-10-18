import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { DICTIONARY_MAPPING } from '../../helpers/dictionary';
import { getCustomStorageKeys } from '../../services/storage';
import { Dialog } from '../content/Dialog';

type CustomTodoListDialogProps = {
  active: boolean;
  onCreateTodoList: (key: string) => void;
  onSelectTodoList: (selected: string) => void;
  onClose: () => void;
}

export const CustomTodoListDialog = ({ active, onCreateTodoList, onSelectTodoList, onClose }: CustomTodoListDialogProps) => {
 
  const context = useContext(TodoContext);
  const settings = context.settings;

  const [newKey, setNewKey] = useState('');
  const dictionary = DICTIONARY_MAPPING(settings.language);

  const submitNewTodoListHandler = (ev: FormEvent) => {
    ev.preventDefault();
    onCreateTodoList(newKey);
    onClose();
    setNewKey('');
  };

  const selectTodoListHandler = (ev: ChangeEvent<HTMLSelectElement>): void => {
    onSelectTodoList(ev.target.value);
    onClose();
  };

  return (
    <Dialog isOpen={ active } onClose={ onClose }>
      <h2>{ dictionary.customTodoListTitle }</h2>
      <div className="form-group">
        <label className="label">
          { dictionary.loadTodoListLabel }
          </label>
        <select onChange={ selectTodoListHandler } value=''>
          <option disabled value=''>---{ dictionary.loadTodoListLabel }---</option>
          {
            getCustomStorageKeys().map((TodoListKey, index) => <option key={index}>{ TodoListKey }</option>)
          }
        </select>
      </div>
      <form onSubmit={ submitNewTodoListHandler }>
        <div className="form-group">
          <label className="label">
            { dictionary.createCustomTodoListLabel }
          </label>
          <input type="text" name="todo-list" value={newKey} onChange={ (ev) => { setNewKey(ev.target.value) }}/>
          <button>{ dictionary.create }</button>
        </div>
      </form>
    </Dialog>
  )
}