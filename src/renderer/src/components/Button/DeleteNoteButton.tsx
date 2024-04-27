/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ActionButton, ActionButtonProps } from '@/components'
import { deleteNoteAtom } from '@/store'
import { useSetAtom } from 'jotai'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)
  const handleDeletion = async () => {
    await deleteNote()
  }
  return (
    <ActionButton {...props} onClick={handleDeletion}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
