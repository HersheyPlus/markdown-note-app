import { selectedNoteAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'
import React from 'react'

export const useMarkdownEditor = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  return { selectedNote }
}
