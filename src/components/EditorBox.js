import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

const EditorBox = props => {
	const onChange = (value, event) => {
		console.log(event, value);
		//props.updateState(value);
	};

	return (
		<div>
			<AceEditor
				mode="javascript"
				theme="monokai"
				name="LessonEditor"
				width="100%"
				onChange={onChange}
				editorProps={{ $blockScrolling: true }}
			/>
		</div>
	);
};

export default EditorBox;
