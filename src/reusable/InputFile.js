import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
	CContainer,
	CForm,
	CFormGroup,
	CFormText,
	CInput,
	CLabel,
	CRow,
	CCol,
	CCollapse,
	CButton,
	CInputFile,
	CCardHeader,
	CCardBody,
	CCard,
	CSelect,
	CTextarea
} from '@coreui/react';

const InputFile = ({ name,control }) => {
	return (
		<CFormGroup row>
			<CCol md="3">
				<CLabel className="">Category Image (Optional) </CLabel>
			</CCol>
			<CCol xs="12" md="5">
				<Controller
					render={({ field }) => <CInputFile {...field} custom/>}
					name={name}
					control={control}
					default=" no file"
					type="file"
				/>
				<CLabel htmlFor="custom-file-input" variant="custom-file">
					Choose file...
				</CLabel>
				<CFormText className="help-block">Please upload images with extensions( jpg , jpeg, png)</CFormText>
			</CCol>
		</CFormGroup>
	);
};

export default InputFile;
