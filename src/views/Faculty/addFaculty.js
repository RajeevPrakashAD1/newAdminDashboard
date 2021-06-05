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
	CCard
} from '@coreui/react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import InputForm from './../../reusable/inputTaking';
import { CIcon } from '@coreui/icons-react';

import InputFile from './../../reusable/InputFile';
import { Controller } from 'react-hook-form';
import CheckBox  from '@material-ui/icons';

const AddFaculty = () => {
	const [ collapse, setCollapse ] = useState(true);

	const toggle = (e) => {
		setCollapse(!collapse);
		e.preventDefault();
	};

	const { register, control, handleSubmit } = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<React.Fragment>
			<CRow>
				<CCol xs="12" md="11">
					<CCard style={{ backgroundColor: '#fff', padding: '20px' }}>
						<CCardHeader style={{ padding: '0px' }}>
							<h1 style={{ display: 'inline', paddingLeft: '0px' }}>Add Faculty </h1>
							<ExpandMoreIcon onClick={toggle} />
						</CCardHeader>
						<CCollapse show={collapse}>
							<CCardBody>
								<CRow>
									<CCol sm="12" className="mb-3" style={{ paddingLeft: '0' }}>
										{' '}
										<h2>Basic Information </h2>{' '}
									</CCol>

									<CForm onSubmit={handleSubmit(onSubmit)}>
										<InputForm
											placeholder="Faculty Name"
											type="text"
											label="Faculty Name"
											register={register}
											required
											control={control}
										/>
										<InputFile
											name="FacultyImage"
											register={register}
											label="Faculty Image (Optional)"
										/>
										<InputForm
											placeholder="Qualification"
											type="text"
											label="Qualification"
											register={register}
											required
											control={control}
										/>
										<InputForm
											placeholder="Skills"
											type="text"
											label="Skills"
											register={register}
											required
											control={control}
										/>
										<InputForm
											placeholder="Achivement"
											type="text"
											label="Achivement"
											register={register}
											required
											control={control}
										/>
										<h3 className="mt-5 mb-5"> Social Media Information</h3>
										<InputForm
											placeholder="Facebook"
											type="text"
											label="Facebook"
											register={register}
											required
											control={control}
										/>
										<InputForm
											placeholder="Twitter"
											type="text"
											register={register}
											required
											control={control}
											label="Twitter"
										/>
										<InputForm
											placeholder="Quora"
											type="text"
											label="Quora"
											register={register}
											required
											control={control}
										/>
										<InputForm
											placeholder="Telegram"
											type="text"
											label="Telegram"
											register={register}
											required
											control={control}
										/>
										<InputForm
											placeholder="Instagram"
											type="text"
											label="Instagram"
											register={register}
											required
											control={control}
										/>
										<InputForm
											placeholder="Whatsapp Group Link"
											type="text"
											label="Whatsapp Group Link"
											register={register}
											required
											control={control}
										/>{' '}
										<CButton type="submit" size="sm" color="success" className="mr-2 mb-5">
											<CIcon name="cil-scrubber" /> Save Changes
										</CButton>
										<CButton type="reset" size="sm" color="danger" className="mr-2 mb-5">
											<CIcon name="cil-ban" /> Cancel
										</CButton>
									</CForm>
								</CRow>
							</CCardBody>
						</CCollapse>
					</CCard>
				</CCol>
			</CRow>
		</React.Fragment>
	);
};

export default AddFaculty;
