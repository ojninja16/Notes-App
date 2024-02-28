import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useNoteStore } from '@/store/store';
import { PlusCircle,ArrowLeftCircle } from 'react-feather';
import { HexColorPicker } from 'react-colorful';
import Layout from '@/components/Layout';
const NewNote: React.FC = () => {
  const router = useRouter();
  const { addNote } = useNoteStore();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [error, setError] = useState<string | null>(null);
  const handleAddNote = () => {
    if (!title.trim()) {
        setError('Title cannot be empty');
        return;
      }
  
      if (title.length > 50) {
        setError('Title should be 50 characters or less');
        return;
      }
  
      if (content.length > 2000) {
        setError('Content should be 2000 characters or less');
        return;
      }
    const newNote = {
      id: Date.now().toString(),
      title,
      content,
      timestamp: new Date(),
      color: selectedColor,
    };
    addNote(newNote);
    router.push('/');
  };
  return (
    <Layout>
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="bg-white rounded-md shadow-lg p-4 md:p-8 lg:p-10 w-full max-w-md mx-auto mt-2 mb-8 mx-6">
      <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => router.push('/')}
            className="btn bg-blue-500 text-white hover:bg-blue-600 rounded-md py-2 px-3 flex items-center"
          >
            <ArrowLeftCircle size={20} className="mr-3" />
            Return
          </button>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
            Add New Note
          </h1>
        </div>
        <form className="flex flex-col">
          <label className="text-base md:text-lg lg:text-xl font-medium text-gray-600 mb-2">
            Title:
          </label>
          <input
            type="text"
            placeholder="Enter the title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input mb-2 bg-slate-100 p-2 rounded-md"
          />

          <label className="text-base md:text-lg lg:text-xl font-medium text-gray-600 mb-2">
            Content:
          </label>
          <textarea
            placeholder="Write your content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="input mb-2 bg-slate-100 p-2 rounded-md"
          />
          <label className="text-base md:text-lg lg:text-xl font-medium text-gray-600 mb-2">
            Select Color:
          </label>
          <HexColorPicker
            color={selectedColor}
            onChange={(color) => setSelectedColor(color)}
          />
          <p className="text-sm text-gray-600 mt-2">
            Selected Color: {selectedColor.toUpperCase()}
          </p>
          {error && <p className="text-red-500 text-md font-semibold mt-2">{error}</p>}
          <button
            type="button"
            onClick={handleAddNote}
            className="btn bg-blue-500 text-white hover:bg-blue-600 rounded-md py-2 mt-4 flex items-center justify-center"
          >
            <PlusCircle size={16} className="mr-2" />
            Add Note
          </button>
        </form>
      </div>
    </div>
    </Layout>
  );
};

export default NewNote;
