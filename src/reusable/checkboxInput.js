import { CInput } from '@coreui/react';
import React, { useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

const CheckBoxInput = React.forwardRef(
	(
		{
			onChange,
			onBlur,
			name,
			label,
			placeholder,
			type,
			control,
			register,
			required,
			value,
			optionDefaultValue,
			checkboxDefaultValue = false,
            checked = false,
			
		},
		ref
	) => {
        const [checkedd,setChecked] = useState(checked);
		return (
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				<Controller
					render={({ field }) => (
						<CInput
							style={{ width: '40px', marginRight: '30px' }}
							col
							md="2"
							type="checkbox"
							checked={checkedd}
                           
							{...field}

                            onClick = {() => setChecked(!checkedd) }
						/>
					)}
					control={control}
                    defaultValue={checked}
					
					name={value}
				/>

				<Controller
					render={({ field }) => <CInput placeholder={placeholder} {...field} />}
					name={`${value}Input`}
					defaultValue=""
					type="text"
					control={control}
					defaultValue={optionDefaultValue}
				/>
			</div>
		);
	}
);

export default CheckBoxInput;
