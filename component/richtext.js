import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Editor(props) {

  const[val,setval] = React.useState(props.value)
  console.log(val)
  function sendData(data){
    setval(data)
    props.setDescriptionHTML(data)
  }
  return (
    <CKEditor
      name="description"
      data={val}
      editor={ClassicEditor}
      onChange={(event, editor) => {
        
        const data = editor.getData();
        sendData(data)
      }}
    />
  )
}
