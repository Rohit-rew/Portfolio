import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Editor(props) {

  const [val , setval] = React.useState("")


  return (
    <CKEditor
      // ref={ref}
      name="description"
      data={"hello there "}
      editor={ClassicEditor}
      onChange={(event, editor) => {
        
        const data = editor.getData();
        setval(data)
      }}
    />
  )
}
 