import React, { Component } from 'react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

class RichTextEditor extends Component {

  constructor(props) {
    super(props);
    this.reactQuillRef = null; // ReactQuill component
    this.state = { text: props.text || { ops: [] } }; 
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    this.attachQuillRefs();
  }

  attachQuillRefs() {
    // Ensure React-Quill reference is available:
    if (typeof this.reactQuillRef.getEditor !== 'function') return;
    // Skip if Quill reference is defined:
    if (this.quillRef != null) return;
    
    const quillRef = this.reactQuillRef.getEditor();
    if (quillRef != null) this.quillRef = quillRef;
  }

  handleChange() {
      // According to the docs we have to use editor.getContents() to get the full Delta. The object 
      // received from this handler only contains the last modifications.
      // https://github.com/zenoamaro/react-quill#using-deltas
      let value = this.reactQuillRef.getEditor().getContents();    
      this.setState({text: value});
  }

  render() {
    return (
      <ReactQuill 
        ref={(el) => { this.reactQuillRef = el }}
        value={this.state.text} 
        onChange={this.handleChange} 
        modules={RichTextEditor.modules}
        formats={RichTextEditor.formats}
        theme="snow"/>
    )
  }
}

RichTextEditor.modules = {}
RichTextEditor.modules.toolbar = [
  ['bold', 'italic', 'underline', 'strike'],       // toggled buttons
  ['blockquote', 'code-block'],                    // blocks
  [{ 'header': 1 }, { 'header': 2 }],              // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],    // lists
  [{ 'script': 'sub'}, { 'script': 'super' }],     // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],         // outdent/indent
  [{ 'direction': 'rtl' }],                        // text direction
  [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],       // header dropdown
  [{ 'color': [] }, { 'background': [] }],         // dropdown with defaults
  [{ 'font': [] }],                                // font family
  [{ 'align': [] }],                               // text align
  ['clean'],                                       // remove formatting
  ['image'],
]

/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
RichTextEditor.formats = [
  'header', 'font', 'background', 'color', 'code', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent', 'script', 'align', 'direction',
  'link', 'image', 'code-block', 'formula', 'video'
]

export default RichTextEditor;