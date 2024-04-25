import {
  Sidebar,
  RootLayout,
  Content,
  DraggableTopbar,
  ActionButtonsRow,
  NotePreviewList
} from '@/components'
import MarkdonwEditor from './components/MarkdonwEditor'
import FloatingNoteTitle from './components/FloatingNoteTitle'

function App(): JSX.Element {
  return (
    <>
      <DraggableTopbar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-4 space-y-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          <FloatingNoteTitle className="pt-2" />
          <MarkdonwEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
