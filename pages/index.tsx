import Layout from '@/components/Layout';
import Link from 'next/link';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { Edit2, Trash2 ,PlusCircle} from 'react-feather';
import { Note } from '@/models/Notes';
import { useNoteStore } from '@/store/store';
import EditModal from '@/components/EditModal';
import NoteCard from '@/components/NoteCard';
const Home: React.FC = () => {
  const { notes, addNote, deleteNote, updateNote } = useNoteStore();
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const handleDelete = (id: string) => {
    deleteNote(id);
  };
  const handleEdit = (editedNote: Note) => {
    updateNote(editedNote);
    setSelectedNote(null);
  };
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-slate-100">
      <Link href="/newnote" className="mb-4">
  <button className="btn bg-blue-500 text-white hover:bg-blue-600 rounded-md px-4 py-2 flex items-center">
    <PlusCircle size={24} className="mr-2" />
    Add New Note
  </button>
</Link>
        <div className="flex flex-wrap justify-center mb-12">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={handleDelete}
              onEdit={setSelectedNote}
            />
          ))}
        </div>
        <Modal
          isOpen={!!selectedNote}
          onRequestClose={() => setSelectedNote(null)}
          contentLabel="Edit Note"
          className="modal-content mt-20 p-6 max-w-md mx-auto rounded-md"
        >
          {selectedNote && (
            <EditModal
              isOpen={!!selectedNote}
              onRequestClose={() => setSelectedNote(null)}
              onEdit={handleEdit}
              note={selectedNote}
            />
          )}
        </Modal>
      </main>
    </Layout>
  );
};
export default Home;
