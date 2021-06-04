import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { CFormGroup, CCol, CLabel, CTextarea } from '@coreui/react';

const TextArea = ({ label,name,control }) => {
	return (
		<CFormGroup row>
			<CCol md="3">
				<CLabel>{label}</CLabel>
			</CCol>
			<CCol md="6">
				<Controller render={({ field }) => <CTextarea style={{ height: '200px' }} {...field} />} 

                    name = {name}
                    control = {control}
                />
			</CCol>
		</CFormGroup>
	);
};

export default TextArea;
