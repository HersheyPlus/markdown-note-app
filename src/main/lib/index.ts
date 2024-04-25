import { homedir } from 'os'

export const getRootDir = (): string => {
  return `${homedir()}/markdown-note-app`
}
