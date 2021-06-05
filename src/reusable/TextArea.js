import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { CFormGroup, CCol, CLabel, CTextarea,placeholder } from '@coreui/react';

const TextArea = ({ label,name,control,placeholder }) => {
	return (
		<CFormGroup row>
			<CCol md="3">
				<CLabel>{label}</CLabel>
			</CCol>
			<CCol md="6">
				<Controller render={({ field }) => <CTextarea style={{ height: '200px' }} {...field} placeholder={placeholder} />} 

                    name = {name}
                    control = {control}
                />
			</CCol>
		</CFormGroup>
	);
};

export default TextArea;
