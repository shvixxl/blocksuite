import * as BlockSuite from './index.js';

const schema = new BlockSuite.Schema().register(BlockSuite.AffineSchemas);
const collection = new BlockSuite.DocCollection({ schema });
const job = new BlockSuite.Job({ collection });
const editor = new BlockSuite.AffineEditorContainer();
const doc = collection.createDoc();

doc.load(() => {
  const rootId = doc.addBlock('affine:page', {});
  doc.addBlock('affine:surface', {}, rootId);
  const noteId = doc.addBlock('affine:note', {}, rootId);
  doc.addBlock('affine:paragraph', {}, noteId);
});
doc.resetHistory();

doc.slots.blockUpdated.on(async () => {
  const snapshot = await job.docToSnapshot(doc);
  document.getElementById('document-snapshot')!.innerText = JSON.stringify(
    snapshot,
    null,
    2
  );
});

editor.doc = doc;

document.getElementById('editor-container')?.append(editor);

document.getElementById('switch-editor-button')!.onclick = () => {
  if (editor.mode === 'edgeless') {
    editor.switchEditor('page');
  } else {
    editor.switchEditor('edgeless');
  }
};
