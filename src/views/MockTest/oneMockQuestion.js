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

import { useForm, Controller, useFieldArray } from 'react-hook-form';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import React, { useState } from 'react';
import InputForm from './../../reusable/inputTaking';
import { CIcon } from '@coreui/icons-react';

import CheckBoxInput from './../../reusable/checkboxInput';
import SelectMultiple from './../../reusable/SelectMultiple';
import TextArea from './../../reusable/TextArea';
import InputFile from './../../reusable/InputFile';

const OneMockQuestion = ({ control, register }) => {
	const [ collapse, setCollapse ] = useState(true);

	const toggle = (e) => {
		setCollapse(!collapse);
		e.preventDefault();
	};

	const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
		control,
		name: 'ExtraMockQuestion'
	});

	const handdleAppend = () => {
		append();
	};

	return (
		<React.Fragment>
			{fields.map((field, index) => {
				return (
					<CRow key={field.id} style={{ padding: '0px' }} >
						<CCol xs="12" md="11">
							<CCard style={{ backgroundColor: '#fff', border: 'none' }}>
								<CCardHeader style={{ padding: '0px',marginBottom: '20px'}}>
									<h1 style={{ display: 'inline', paddingLeft: '0px' }}>Add Mock Question </h1>
									<ExpandMoreIcon onClick={toggle} />
								</CCardHeader>
								<CCollapse show={collapse}>
									<CRow>
										<CCardBody style={{ padding: '0px' }}>
											<CCol sm="12" className="mb-3" style={{ paddingLeft: '0px' }}>
												<h2> Question {index + 2} </h2>
											</CCol>

											<TextArea
												name={`ExtraMockQuestion[${index}].QuestionTitle`}
												label="Question Title"
												control={control}
												placeholder="Question Title"
											/>
											<CFormGroup row>
												<CCol md="3">
													<CLabel>Answers</CLabel>
												</CCol>
												<CCol xs="12" md="6">
													<CheckBoxInput
														value={`ExtraMockQuestion[${index}].a`}
														control={control}
													/>
													<CheckBoxInput
														value={`ExtraMockQuestion[${index}].b`}
														control={control}
													/>
													<CheckBoxInput
														value={`ExtraMockQuestion[${index}].c`}
														control={control}
													/>
													<CheckBoxInput
														value={`ExtraMockQuestion[${index}].d`}
														control={control}
													/>
												</CCol>
											</CFormGroup>
											<TextArea
												name={`ExtraMockQuestion[${index}].AdditionalNotes`}
												label="Additiional Notes"
												control={control}
												placeholder="Additonal notes"
											/>
											<InputFile
												register={register}
												name={`ExtraMockQuestion[${index}].MockQuestionImage`}
												label="Question Image (optional)"
											/>
											<CRow>
												<CCol>
													<CButton color="danger" onClick={() => remove(index)}>
														{' '}
														Delete
													</CButton>
												</CCol>
											</CRow>

											
										</CCardBody>
									</CRow>
								</CCollapse>
							</CCard>
						</CCol>
					</CRow>
				);
			})}
        
			<CRow>
				<CCol className="mb-5" md="6" style={{padding: '0px'}}>
					<CButton className="" color="success" onClick={handdleAppend}>
						{' '}
						Add More
					</CButton>
				</CCol>
			</CRow>
         
		</React.Fragment>
	);
};

export default OneMockQuestion;
