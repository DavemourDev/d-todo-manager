import React, { ChangeEvent, FormEvent, useState } from 'react';
import { getCustomStorageKeys } from '../../services/storage';
import { Dialog } from '../content/Dialog';

type CustomTodoListDialogProps = {
  active: boolean;
  onCreateTodoList: (key: string) => void;
  onSelectTodoList: (selected: string) => void;
  onClose: () => void;
}


export const CustomTodoListDialog = ({ active, onCreateTodoList, onSelectTodoList, onClose }: CustomTodoListDialogProps) => {
 
  const [newKey, setNewKey] = useState('');

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
      <h2>Listas de tareas personalizadas</h2>
      <div className="form-group">
        <label className="label">
          Cargar lista de tareas
          </label>
        <select onChange={ selectTodoListHandler } value=''>
          <option disabled value=''>---Selecciona una lista de tareas---</option>
          {
            getCustomStorageKeys().map((TodoListKey, index) => <option key={index}>{ TodoListKey }</option>)
          }
        </select>
      </div>
      <form onSubmit={ submitNewTodoListHandler }>
        <div className="form-group">
          <label className="label">
            Crear nueva lista de tareas
          </label>
          <input type="text" name="todo-list" value={newKey} onChange={ (ev) => { setNewKey(ev.target.value) }}/>
          <button>Crear</button>
        </div>
      </form>
    </Dialog>
  )
}