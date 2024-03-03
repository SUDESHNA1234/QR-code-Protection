import { useState } from 'react';
import QRCode from 'react-qr-code';

function App() {
const [value, setValue] = useState();
const [back, setBack] = useState('#FFFFFF');
const [fore, setFore] = useState('#000000');
const [size, setSize] = useState(256);

return (
	<div className="App">
	<center>
		<br />
		<br />
		<input
		type="text"
		onChange={(e) => setValue(e.target.value)}
		placeholder="Value of Qr-code"
		/>
		<br />
		<br />
		<br />
		{value && (
		<QRCode
			value={value}
			bgColor={back}
			fgColor={fore}
			size={size === '' ? 0 : size}
		/>
		)}
	</center>
	</div>
);
        }