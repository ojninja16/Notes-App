import React from 'react';
import Link from 'next/link';
import { Trash2, Edit } from 'react-feather';
import { Note } from '@/models/Notes';

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
  onEdit: (editedNote: Note) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete, onEdit }) => {
  return (
    <div className="m-3 p-6 max-w-xs w-full md:w-80 border border-gray-300 rounded-md relative overflow-hidden shadow-md" style={{ backgroundColor: note.color }}>
      <div className="absolute top-2 right-2 cursor-pointer  bg-white p-2 rounded-full">
        <Trash2 size={20} color="#ff0000" onClick={() => onDelete(note.id)} />
      </div>
      <div className="absolute top-2 right-12 cursor-pointer  bg-white p-2 rounded-full">
        <Edit size={20} color="#007bff" onClick={() => onEdit(note)} />
      </div>
      <Link href={`/note/${note.id}`} passHref>
      <h3 className="text-lg font-bold mb-2 text-indigo-900">{note.title}</h3>
      <p className="text-gray-700 mb-2">{note.content.substring(0, 40)}...</p>
      <p className="text-gray-500 font-semibold">{note.timestamp.toLocaleString()}</p>
      </Link>
    </div>
  );
};

export default NoteCard;
