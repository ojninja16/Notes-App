import Layout from '@/components/Layout';
import Link from 'next/link';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { Edit2, Trash2 ,PlusCircle,ArrowDownCircle} from 'react-feather';
import { Note } from '@/models/Notes';
import { useNoteStore } from '@/store/store';
import EditModal from '@/components/EditModal';
import NoteCard from '@/components/NoteCard';
import { useSpring, animated } from 'react-spring';
import { Fade ,Bounce} from 'react-awesome-reveal';
import Footer from '@/components/Footer';
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
  const props = useSpring({
    opacity: 2,
    from: { opacity: 0 },
  });
  return (
    <Layout>
      <Fade triggerOnce duration={3000}>
  <animated.div style={props} className="flex flex-col items-center justify-center h-screen bg-gradient-to-l from-blue-200 to-cyan-200">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Welcome to Notes App</h1>
    <p className="text-lg md:text-xl lg:text-2xl text-center mb-6">Start organizing your thoughts and ideas!</p>
    <Bounce triggerOnce delay={2000}>
      <div className="animate-bounce">
        <ArrowDownCircle size={72} color="#6f42c1" />
      </div>
    </Bounce>
  </animated.div>
</Fade>
    <Fade triggerOnce>
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
      </Fade>
      <Footer/>
    </Layout>
  );
};
export default Home;
