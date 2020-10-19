import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { IDictionary } from '../../helpers/dictionary/IDictionary';
import { capitalize, sanitize } from '../../helpers/string-helpers';
import { getCustomStorageKeys } from '../../services/storage/index';
import { Dialog } from '../content/Dialog';

type CustomTodoListDialogProps = {
  active: boolean;
  onCreateTodoList: (key: string) => void;
  onSelectTodoList: (selected: string) => void;
  onClose: () => void;
}

export const CustomTodoListDialog = ({ active, onCreateTodoList, onSelectTodoList, onClose }: CustomTodoListDialogProps) => {
 
  const context = useContext(TodoContext);

  const [newKey, setNewKey] = useState('');
  const dictionary: IDictionary = context.dictionary;

  const submitNewTodoListHandler = (ev: FormEvent) => {
    ev.preventDefault();
    onCreateTodoList(sanitize(newKey));
    onClose();
    setNewKey('');
  };

  const selectTodoListHandler = (ev: ChangeEvent<HTMLSelectElement>): void => {
    onSelectTodoList(ev.target.value);
    onClose();
  };

  return (
    <Dialog isOpen={ active } onClose={ onClose }>
      <h2>{ dictionary.menu.customTodoLists }</h2>
      <div className="form-group">
        <label className="label">
          { dictionary.labels.loadTodoList }
          </label>
        <select onChange={ selectTodoListHandler } value=''>
          <option disabled value=''>---{ dictionary.tooltips.selectTodoList }---</option>
          {
            getCustomStorageKeys().map((TodoListKey, index) => <option key={index}>{ TodoListKey }</option>)
          }
        </select>
      </div>
      <form onSubmit={ submitNewTodoListHandler }>
        <div className="form-group">
          <label className="label">
            { dictionary.labels.createNewTodoList }
          </label>
          <input type="text" name="todo-list" value={newKey} onChange={ (ev) => { setNewKey(ev.target.value) }}/>
          <button className="button" disabled={ !newKey.trim() }>{ capitalize(dictionary.terms.create) }</button>
        </div>
      </form>
    </Dialog>
  )
}