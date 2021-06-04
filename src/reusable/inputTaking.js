import { useForm, Controller } from 'react-hook-form';

import { CCol, CFormGroup, CFormText, CInput, CLabel } from '@coreui/react';
import React from 'react';

const InputForm = React.forwardRef(({ onChange, onBlur, name, label, placeholder, type, control, register, required }, ref)  => {
	return (
		<React.Fragment>
			<CFormGroup row>
				<CCol md="3">
					<CLabel htmlFor={label} className="">
						{label}
					</CLabel>
				</CCol>
				<CCol xs="12" md="6">
					<Controller
						render={({ field }) => <CInput {...field} placeholder={placeholder}/>}
						name={label}
						control={control}
						defaultValue=""
						type={type}
                        ref={ref}
                        
					/>
				</CCol>
			</CFormGroup>
		</React.Fragment>
	);
});

export default InputForm;
