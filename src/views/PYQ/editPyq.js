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

import { useForm, Controller } from 'react-hook-form';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import React, { useEffect, useState } from 'react';
import bsCustomFileInput from 'bs-custom-file-input';

import InputForm from './../../reusable/inputTaking';
import CIcon from '@coreui/icons-react';

import CheckBoxInput from './../../reusable/checkboxInput';
import SelectMultiple from './../../reusable/SelectMultiple';
import TextArea from './../../reusable/TextArea';
import InputFile from './../../reusable/InputFile';
import OnePyq from './onePyq';
import Notify, { Toastcontainer } from './../../reusable/notify';
const notify = () => Notify();

const EditPyq = ({ match }) => {
	const api = [
		{
			id: 1,
			AdditionalNotes: 'additonal note',
			ExtraPyqQueston: [],
			QuestionTitle: 'what is ur name',
			a: true,
			aInput: 'raju',
			b: false,
			bInput: 'prashant',
			c: true,
			cInput: ' rtajeev',
			d: false,
			dInput: 'kuch ',
            
		}
	];

	const [ collapse, setCollapse ] = useState(true);

	const toggle = (e) => {
		setCollapse(!collapse);
		e.preventDefault();
	};
	const { register, handleSubmit, control } = useForm();

	const onSubmit = (data) => {
		console.log(data);
        console.log("chage api");
	};

	const [ file, setfile ] = useState();

	useEffect(() => {
		bsCustomFileInput.init();

		return () => {};
	}, []);

	console.log(Number(match.params.id), 'match or not', ' q id', api[0].id);

	return (
		<React.Fragment>
			{api.map((item) => {
				if (item.id === Number(match.params.id)) {
					return (
						<CRow>
							<CCol xs="12" md="11">
								<CCard style={{ backgroundColor: '#fff', padding: '40px' }}>
									<CCardHeader style={{ padding: '0px' }}>
										<h1 style={{ display: 'inline', paddingLeft: '0px' }}>Edit PYQ </h1>
										<ExpandMoreIcon onClick={toggle} />
									</CCardHeader>
									<CCollapse show={collapse}>
										<CCardBody>
											<CRow>
												<CCol sm="12" className="mb-3" style={{ paddingLeft: '0px' }}>
													<h2> question id : {match.params.id} </h2>
												</CCol>
											</CRow>
											<CRow>
												<CForm onSubmit={handleSubmit(onSubmit)}>
													<SelectMultiple name="PyqQuestionCategory" control={control} />

													<TextArea
														name="QuestionTitle"
														label="Question Title"
														placeholder="Question title"
														defaultValue={item.QuestionTitle}
														control={control}
													/>

													<CFormGroup row>
														<CCol md="3">
															<CLabel>Answers</CLabel>
														</CCol>
														<CCol xs="12" md="6">
															<CheckBoxInput
																value="a"
																control={control}
																placeholder="AnswerA"
																checked={item.a}
																optionDefaultValue={item.aInput}
															/>
															<CheckBoxInput
																value="b"
																control={control}
																placeholder="AnswerA"
                                                                checked={item.b}
                                                                optionDefaultValue={item.bInput}
															/>
															<CheckBoxInput
																value="c"
																control={control}
																placeholder="AnswerA"
                                                                checked={item.c}
                                                                optionDefaultValue={item.cInput}
															/>
															<CheckBoxInput
																value="d"
																control={control}
																placeholder="AnswerA"
                                                                checked={item.d}
                                                                optionDefaultValue={item.dInput}
															/>
														</CCol>
													</CFormGroup>

													<TextArea
														name="AdditionalNotes"
														label="Additional Notes"
														control={control}
														placeholder="additional notes"
                                                        defaultValue={item.AdditionalNotes}
													/>

													<InputFile
														label="Question Image (optional)"
														name="PyqImage"
														register={register}
                                                        
                                                        
													/>

													<CRow>
														<CCol style={{ padding: '0px' }}>
															<CButton
																type="submit"
																size="sm"
																onClick={notify}
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
															<Toastcontainer />
														</CCol>
													</CRow>
												</CForm>
											</CRow>
										</CCardBody>
									</CCollapse>
								</CCard>
							</CCol>
						</CRow>
					);
				} else {
					return <h1> no question with this id</h1>;
				}
			})}
		</React.Fragment>
	);
};

export default EditPyq;
