import React, { useState } from 'react';
import Modal from 'react-modal';
import { Edit2 } from 'react-feather';
import { Note } from '@/models/Notes';
import { colours } from '@/models/Colors';
import Layout from './Layout';

interface EditModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onEdit: (editedNote: Note) => void;
  note: Note;
}

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onRequestClose,
  onEdit,
  note,
}) => {
  const [editedNote, setEditedNote] = useState(note);
  const [isTitleChanged, setTitleChanged] = useState(false);
  const [isContentChanged, setContentChanged] = useState(false);

  const handleEdit = () => {
    const updatedNote: Note = {
      ...editedNote,
      timestamp: new Date(),
    };
    onEdit(updatedNote);
    onRequestClose();
  };

  const handleColorChange = (color: string) => {
    setEditedNote({ ...editedNote, color });
  };

  return (
    <Layout>
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Note"
      className="modal-content mt-20 p-8 max-w-lg  mx-auto rounded-md"
    >
      <div className="modal-content p-8 bg-white rounded-md shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Note</h2>
          <button onClick={onRequestClose} className="text-gray-500">
            Close
          </button>
        </div>
        <label className="block text-lg font-medium text-gray-600 mt-2">
          Title:
        </label>
        <input
         placeholder="Add your title..."
          type="text"
          value={editedNote.title}
          onChange={(e) => {
            setEditedNote({ ...editedNote, title: e.target.value });
            setTitleChanged(true);
          }}
          className="input bg-gray-100 p-2 rounded-md w-full"
        />
        {isTitleChanged && (
          <p className="text-sm text-green-500 mt-1">Title has been changed</p>
        )}

        <label className="block text-lg font-medium text-gray-600 mt-4">
          Content:
        </label>
        <textarea
         placeholder="Write your content here..."
          value={editedNote.content}
          onChange={(e) => {
            setEditedNote({ ...editedNote, content: e.target.value });
            setContentChanged(true);
          }}
          className="input bg-gray-100 p-2 rounded-md w-full"
        />
        {isContentChanged && (
          <p className="text-sm text-green-500 mt-1">
            Content has been changed
          </p>
        )}

        <div className="flex items-center mt-4">
          <label className="block text-base font-medium text-gray-600 mr-2">
            Background Color:
          </label>
          <select
            value={editedNote.color}
            onChange={(e) => handleColorChange(e.target.value)}
            className="input bg-gray-100 p-2 rounded-md"
          >
            {colours.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center mt-6">
          <button
            type="button"
            onClick={handleEdit}
            className="btn bg-blue-500 text-white hover:bg-blue-600 rounded-md flex items-center justify-center px-4 py-2"
          >
            <Edit2 size={16} className="mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
    </Layout>
  );
};

export default EditModal;
