import { CInput } from '@coreui/react';
import React from 'react';

import { useForm, Controller } from 'react-hook-form';

const CheckBoxInput = ({ value, control }) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-around' }}>
			<Controller
				render={({ field }) => (
					<CInput style={{ width: '40px', marginRight: '30px' }} col md="2" type="checkbox" {...field} />
				)}
				control={control}
				defaultValue={false}
				name={value}
			/>

			<Controller
				render={({ field }) => <CInput col md="4" type="text" {...field} />}
				name={`${value}-input`}
				defaultValue=" "
				control={control}
			/>
		</div>
	);
};

export default CheckBoxInput;
