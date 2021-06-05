import { CInput } from '@coreui/react';
import React from 'react';

import { useForm, Controller } from 'react-hook-form';

const CheckBoxInput  = React.forwardRef(({ onChange, onBlur, name, label, placeholder, type, control, register, required ,value, }, ref) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-around' }}>
			<Controller
				render={({ field }) => (
					<CInput style={{ width: '40px', marginRight: '30px' }} col md="2" type="checkbox" {...field}  />
				)}
				control={control}
				defaultValue={false}
				name={value}
			/>

			<Controller
				render={({ field }) => <CInput placeholder= {placeholder}  {...field} 
                
                />}
                
				name={`${value}-input`}
				defaultValue=" "
                type="text" 
				control={control}
                
			/>
		</div>
	);
});

export default CheckBoxInput;
