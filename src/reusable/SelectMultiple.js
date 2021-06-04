import { CFormGroup, CLabel, CCol, CSelect } from '@coreui/react';
import { ControlCamera } from '@material-ui/icons';
import React from 'react';
import { Controller } from 'react-hook-form';

const SelectMultiple = ({ name, control }) => {
	return (
		<CFormGroup row>
			<CCol md="3">
				<CLabel htmlFor="select">Category</CLabel>
			</CCol>

			<CCol xs="12" md="6">
				<Controller
					name={name}
					control={control}
					render={({ field }) => (
						<CSelect {...field}className="form-control category select2">
							<option value="0" hidden="hidden">
								SELECT CATEGORY
							</option>
							<option value="15"> NTA-NET &gt; Paper 1 &gt; Teaching Aptitude &gt; Mock Test 1</option>
							<option value="16"> NTA-NET &gt; Paper 1 &gt; Teaching Aptitude &gt; Mock Test 2</option>
							<option value="18"> State SET &gt; Maharashtra SET</option>
						</CSelect>
					)}
				/>
			</CCol>
		</CFormGroup>
	);
};

export default SelectMultiple;
