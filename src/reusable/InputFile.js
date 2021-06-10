import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import bsCustomFileInput from 'bs-custom-file-input';
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


const InputFile = ({ label,name, register,defalutFileValue }) => {
    const [file,setfile]=useState();

    useEffect(() => {
   
        bsCustomFileInput.init();
      
      return () => {
        
      }
    }, [])


	return (
		<CFormGroup row>
			<CLabel col md={3}>
				{label}
			</CLabel>
			<CCol xs="12" md="6">
				<div className="custom-file">
					<input
						id={name}
						type="file"
						{...register(name)}
						onChange={(e) => {
							const file = e.target.files[0];
							setfile(file);
						}}
						className="custom-file-input"
                        value = {defalutFileValue}
					/>
					<label className="custom-file-label" htmlFor={name}>
						Choose file
					</label>
				</div>
				<CFormText style={{ marginBottom: '20px' }} className="help-block">
					Please upload images with extensions( jpg , jpeg, png)
				</CFormText>
			</CCol>
		</CFormGroup>
	);
};

export default InputFile;
