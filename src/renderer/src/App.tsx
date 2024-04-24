import { Sidebar, RootLayout, Content, DraggableTopbar, ActionButtonsRow, NotePreviewList } from '@/components'


function App(): JSX.Element {
  return (
    <>
      <DraggableTopbar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-4 space-y-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">Contene</Content>
      </RootLayout>
    </>
  )
}

export default App
