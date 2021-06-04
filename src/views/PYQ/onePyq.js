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

const OnePyq = ({ control }) => {
	const [ collapse, setCollapse ] = useState(true);

	const toggle = (e) => {
		setCollapse(!collapse);
		e.preventDefault();
	};

	const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
		control,
		name: 'ExtraPyqQueston'
	});

	const handdleAppend = () => {
		append();
	};
	const handdleDelete = () => {
		remove();
	};
	return (
		<React.Fragment>
			{fields.map((field, index) => {
				return (
					<CRow key={field.id}>
						<CCol xs="12" md="11">
							<CCard style={{ backgroundColor: '#fff', border: 'none' }}>
								<CCardHeader style={{ padding: '0px' }}>
									<h1 style={{ display: 'inline', paddingLeft: '0px' }}>Add PYQ </h1>
									<ExpandMoreIcon onClick={toggle} />
								</CCardHeader>
								<CCollapse show={collapse}>
									<CCardBody>
										<CRow>
											
												<CCol sm="12" className="mb-3" style={{ paddingLeft: '0px' }}>
													<h2> Question {index + 2} </h2>
												</CCol>
												<TextArea
													name={`ExtraPyqQueston[${index}].QuestionTitle`}
													label="Question Title"
													control={control}
												/>
												<CFormGroup row>
													<CCol md="3">
														<CLabel>Answers</CLabel>
													</CCol>
													<CCol xs="12" md="6">
														<CheckBoxInput
															value={`ExtraPyqQueston[${index}].a`}
															control={control}
														/>
														<CheckBoxInput
															value={`ExtraPyqQueston[${index}].b`}
															control={control}
														/>
														<CheckBoxInput
															value={`ExtraPyqQueston[${index}].c`}
															control={control}
														/>
														<CheckBoxInput
															value={`ExtraPyqQueston[${index}].d`}
															control={control}
														/>
													</CCol>
												</CFormGroup>
												<TextArea
													name={`ExtraPyqQueston[${index}].AdditionalNotes`}
													label="Additiional Notes"
													control={control}
												/>
												<InputFile
													control={control}
													name={`ExtraPyqQueston[${index}].PyqQuestionImage`}
												/>
												<CRow>
													<CCol>
														<CButton color="success" onClick={() => remove(index)}>
															{' '}
															Delete
														</CButton>
													</CCol>
												</CRow>
												{/* <CCol>
													<CButton
														type="submit"
														size="sm"
														color="success"
														className="mr-2 mb-5"
													>
														<CIcon name="cil-scrubber" /> Save Changes
													</CButton>
													<CButton
														type="reset"
														size="sm"
														color="danger"
														className="mr-2 mb-5"
													>
														<CIcon name="cil-ban" /> Cancel
													</CButton>
												</CCol> */}
											
										</CRow>
									</CCardBody>
								</CCollapse>
							</CCard>
						</CCol>
					</CRow>
				);
			})}
			<CRow>
				<CCol className="mb-5" md="6">
					<CButton className="mr-3" color="success" onClick={handdleAppend}>
						{' '}
						Add More
					</CButton>
				</CCol>
			</CRow>
		</React.Fragment>
	);
};

export default OnePyq;
