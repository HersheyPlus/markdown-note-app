import { homedir } from 'os'
import { ensureDir, readdir, readFile, stat, writeFile } from 'fs-extra'
import { fileEncoding } from '@shared/constants'
import { get, isEmpty } from 'lodash'
import { NoteInfo } from '@shared/models'
import { GetNotes, ReadNote, WriteNote } from '@shared/types'

export const getRootDir = (): string => {
  return `${homedir()}/Desktop/NotesTest`
}

export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir()
  await ensureDir(rootDir)
  const notesFileNames = await readdir(rootDir, {
    encoding: fileEncoding,
    withFileTypes: false
  })

  const notes = notesFileNames.filter((fileName) => fileName.endsWith('.md'))
  if (isEmpty(notes)) {
    console.info('No notes found, creating a welcome note')
  }

  return Promise.all(notes.map(getNoteInfoFromFileName))
}

export const getNoteInfoFromFileName = async (filename: string): Promise<NoteInfo> => {
  const fileStats = await stat(`${getRootDir()}/${filename}`)
  return {
    title: filename.replace(/\.md$/, ''),
    lastEditTime: fileStats.mtimeMs
  }
}

export const readNote: ReadNote = async (filename): Promise<string> => {
  const rootDir = getRootDir()

  return readFile(`${rootDir}/${filename}.md`, { encoding: fileEncoding })
}

export const writeNote: WriteNote = async (filename, content) => {
  const rootDir = getRootDir()
  console.info(`Writing note ${filename}`)
  return writeFile(`${rootDir}/${filename}.md`, content, { encoding: fileEncoding })
}
