'use client';

import React, { useState } from 'react';
import { 
  X, 
  Plus, 
  RotateCcw, 
  Bot
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppIconRenderer } from './AppIconRenderer';

export function SimulatedAppModal() {
  const { simulatedRunningApp, setSimulatedRunningApp } = useApp();

  // Notes state
  const [notes, setNotes] = useState([
    { id: 1, title: 'Marketplace Launch Plan', content: 'Finalize Next.js TypeScript responsive web app.\nVerify Figma spec alignment.\nDeploy production build.' },
    { id: 2, title: 'Feature Ideas', content: '1. App submission API\n2. Real device installer\n3. Push notifications' }
  ]);
  const [activeNoteId, setActiveNoteId] = useState(1);

  // Sudoku state (simplified 4x4 mini grid for quick enjoyable play!)
  const initialSudoku = [
    [1, 0, 3, 0],
    [0, 3, 0, 2],
    [0, 1, 0, 4],
    [4, 0, 2, 0]
  ];
  const [sudokuBoard, setSudokuBoard] = useState(initialSudoku);
  const [sudokuWon, setSudokuWon] = useState(false);

  if (!simulatedRunningApp) return null;

  const activeNote = notes.find(n => n.id === activeNoteId) || notes[0];

  const handleCellClick = (r: number, c: number) => {
    // Cycle 1 -> 2 -> 3 -> 4 -> 0
    const nextVal = (sudokuBoard[r][c] + 1) % 5;
    const nextBoard = sudokuBoard.map((row, ri) => 
      row.map((val, ci) => (ri === r && ci === c ? nextVal : val))
    );
    setSudokuBoard(nextBoard);

    const isFull = nextBoard.every(row => row.every(val => val !== 0));
    if (isFull) {
      setSudokuWon(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-700/80 overflow-hidden flex flex-col h-[640px] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Window Titlebar */}
        <div className="h-11 bg-neutral-950 px-4 flex items-center justify-between border-b border-neutral-800 select-none">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setSimulatedRunningApp(null)}
              className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors"
            />
            <div className="w-3 h-3 rounded-full bg-amber-500 opacity-60" />
            <div className="w-3 h-3 rounded-full bg-emerald-500 opacity-60" />
          </div>

          <div className="flex items-center space-x-2 text-neutral-300 text-xs font-semibold">
            <div 
              className="w-4 h-4 rounded-md flex items-center justify-center text-white"
              style={{ backgroundColor: simulatedRunningApp.iconBg }}
            >
              <AppIconRenderer name={simulatedRunningApp.iconName} className="w-2.5 h-2.5" />
            </div>
            <span>{simulatedRunningApp.name} ({simulatedRunningApp.version}) — Live Simulation</span>
          </div>

          <button 
            onClick={() => setSimulatedRunningApp(null)}
            className="text-neutral-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Window Content */}
        <div className="flex-1 bg-white overflow-hidden flex flex-col">
          
          {/* Notes */}
          {simulatedRunningApp.id === 'notes-pro' && (
            <div className="flex-1 flex overflow-hidden">
              <div className="w-60 bg-neutral-50 border-r border-neutral-200 p-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-neutral-900">All Notes</span>
                    <button
                      onClick={() => {
                        const newId = Date.now();
                        setNotes([...notes, { id: newId, title: 'New Note', content: '' }]);
                        setActiveNoteId(newId);
                      }}
                      className="p-1 rounded-lg bg-neutral-200 hover:bg-neutral-300 text-neutral-700"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-1">
                    {notes.map(note => (
                      <button
                        key={note.id}
                        onClick={() => setActiveNoteId(note.id)}
                        className={`w-full text-left p-2 rounded-xl text-xs font-medium transition-colors ${
                          activeNoteId === note.id 
                            ? 'bg-amber-100/70 text-amber-950 font-bold' 
                            : 'text-neutral-700 hover:bg-neutral-100'
                        }`}
                      >
                        <p className="truncate">{note.title || 'Untitled'}</p>
                        <p className="text-[10px] text-neutral-400 truncate">{note.content || 'No text'}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-[10px] text-neutral-400 pt-2 border-t border-neutral-200">
                  Paperweight Sync: Active • End-to-End Encrypted
                </div>
              </div>

              <div className="flex-1 p-6 flex flex-col bg-white">
                <input
                  type="text"
                  value={activeNote?.title || ''}
                  onChange={(e) => {
                    const val = e.target.value;
                    setNotes(notes.map(n => n.id === activeNoteId ? { ...n, title: val } : n));
                  }}
                  placeholder="Note Title..."
                  className="text-2xl font-bold text-neutral-900 mb-3 focus:outline-none"
                />
                <textarea
                  value={activeNote?.content || ''}
                  onChange={(e) => {
                    const val = e.target.value;
                    setNotes(notes.map(n => n.id === activeNoteId ? { ...n, content: val } : n));
                  }}
                  placeholder="Start typing your thoughts in Markdown..."
                  className="flex-1 resize-none focus:outline-none text-sm text-neutral-800 leading-relaxed"
                />
              </div>
            </div>
          )}

          {/* Sudoku */}
          {simulatedRunningApp.id === 'sudoku-zen' && (
            <div className="flex-1 p-8 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 text-center">
              <h3 className="text-2xl font-bold text-neutral-900 mb-1">Sudoku Zen 4×4 Mini</h3>
              <p className="text-xs text-neutral-500 mb-6">Click cells to cycle numbers (1 to 4). Fill each row & block!</p>

              {sudokuWon && (
                <div className="mb-4 p-3 bg-emerald-100 border border-emerald-300 rounded-2xl text-emerald-800 text-xs font-bold animate-bounce">
                  🎉 Puzzle Complete! Outstanding Zen Focus!
                </div>
              )}

              <div className="grid grid-cols-4 gap-2 bg-blue-900 p-3 rounded-2xl shadow-xl">
                {sudokuBoard.map((row, r) => 
                  row.map((val, c) => (
                    <button
                      key={`${r}-${c}`}
                      onClick={() => handleCellClick(r, c)}
                      className={`w-14 h-14 rounded-xl text-xl font-bold flex items-center justify-center transition-all ${
                        val === 0 
                          ? 'bg-blue-100 text-neutral-400 hover:bg-white' 
                          : 'bg-white text-blue-900 shadow'
                      }`}
                    >
                      {val !== 0 ? val : ''}
                    </button>
                  ))
                )}
              </div>

              <button
                onClick={() => {
                  setSudokuBoard(initialSudoku);
                  setSudokuWon(false);
                }}
                className="mt-6 px-4 py-2 rounded-full bg-white border border-neutral-300 text-xs font-bold text-neutral-700 hover:bg-neutral-50 shadow-sm flex items-center space-x-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restart Puzzle</span>
              </button>
            </div>
          )}

          {/* F-Droid */}
          {simulatedRunningApp.id === 'f-droid' && (
            <div className="flex-1 p-6 bg-slate-50 flex flex-col overflow-y-auto">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                <div className="flex items-center space-x-2 text-emerald-700 font-extrabold text-sm">
                  <Bot className="w-5 h-5 text-emerald-600" />
                  <span>F-Droid Repository Client v1.20</span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Repositories: Synced (4,210 FOSS packages)
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'K-9 Mail', cat: 'Communication', desc: 'Full-featured email client with PGP support' },
                  { name: 'NewPipe', cat: 'Multimedia', desc: 'Lightweight YouTube frontend with no Google services' },
                  { name: 'OsmAnd~', cat: 'Navigation', desc: 'Offline OpenStreetMap vector maps and turn navigation' },
                  { name: 'Syncthing', cat: 'System', desc: 'Continuous decentralized file synchronization' }
                ].map(item => (
                  <div key={item.name} className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-xs text-neutral-900">{item.name}</h4>
                      <p className="text-[10px] text-neutral-400">{item.cat}</p>
                      <p className="text-[11px] text-neutral-600 mt-1">{item.desc}</p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      FOSS
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fallback for other apps */}
          {!['notes-pro', 'sudoku-zen', 'f-droid'].includes(simulatedRunningApp.id) && (
            <div className="flex-1 p-8 flex flex-col items-center justify-center bg-neutral-950 text-white text-center">
              <div 
                className="w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-2xl mb-4"
                style={{ backgroundColor: simulatedRunningApp.iconBg }}
              >
                <AppIconRenderer name={simulatedRunningApp.iconName} className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight">{simulatedRunningApp.name}</h3>
              <p className="text-sm text-neutral-400 max-w-md mt-1 mb-6">
                {simulatedRunningApp.tagline}
              </p>

              <div className="w-full max-w-lg bg-neutral-900 rounded-2xl p-4 border border-neutral-800 text-left font-mono text-xs text-emerald-400 space-y-1 mb-6 shadow-inner">
                <p>&gt; marketplace-runtime --launch {simulatedRunningApp.id}</p>
                <p>&gt; Initializing sandbox container environment...</p>
                <p>&gt; Version: {simulatedRunningApp.version}</p>
                <p>&gt; Status: Process active (PID: 4920)</p>
                <p className="text-neutral-500">&gt; Memory consumption: 42 MB / Zero security warnings</p>
              </div>

              <button
                onClick={() => setSimulatedRunningApp(null)}
                className="px-6 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold"
              >
                Close Application Window
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
