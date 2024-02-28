import { useRouter } from 'next/router';
import { useNoteStore } from '@/store/store';
import { ArrowLeft } from 'react-feather';
import Layout from '@/components/Layout';
const NoteDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { notes } = useNoteStore();
  const selectedNote = notes.find((note) => note.id === id);
  const handleReturn = () => {
    router.push('/');
  };
  if (!selectedNote) {
    return <div className="p-8">Note not found</div>;
  }
  return (
    <Layout>
    <div className="min-h-screen items-center justify-center mx-3  ">
      <div className="bg-white rounded-md shadow-lg p-4 md:p-8 lg:p-10 w-full max-w-xl mx-auto mt-12 ">
        <div className="flex items-center mb-4">
          <button
            onClick={handleReturn}
            className="btn bg-blue-500 text-white hover:bg-blue-600 rounded-md py-2 px-4 flex items-center"
          >
            <ArrowLeft size={16} className="mr-2" />
            Return
          </button>
        </div>
        <div className="p-4 bg-gray-100 rounded-md shadow-md" style={{ backgroundColor: selectedNote.color }}>
        <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2 sm:mb-4 md:mb-6 lg:mb-8">{selectedNote.title}</h1>
<p className="text-gray-500 mb-2 sm:mb-4 md:mb-6 lg:mb-8 sm:text-base md:text-lg lg:text-lg">{selectedNote.timestamp.toLocaleString()}</p>
<div className="bg-white p-2 sm:p-4 md:p-6 rounded-md">
  <p className="text-sm sm:text-base md:text-lg lg:text-lg">{selectedNote.content}</p>
</div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default NoteDetail;
