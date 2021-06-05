import React, { useState } from 'react';

import {
	CCard,
	CCardHeader,
	CCardBody,
	CCardTitle,
	CCardText,
	CButton,
	CDataTable,
	CCardSubtitle,
	CContainer
} from '@coreui/react';

import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';


export default function ViewPyqList() {
	const [ faculties ] = useState([
		{
			_id: '1',
			name: 'phreya jha',
			image: ' ',
			basiInfo: 'basicInfo',
			socialMedia: 'socialMedia',
			action: 'action'
		},

		{
			_id: '1',
			name: 'threya jha',
			image: 'image',
			basiInfo: 'basicInfo',
			socialMedia: 'socialMedia',
			action: 'action'
		},

		{
			_id: '1',
			name: 'threya jha',
			image: 'image',
			basiInfo: 'basicInfo',
			socialMedia: 'socialMedia',
			action: 'action'
		},
		{
			_id: '1',
			name: 'threya jha',
			image: 'image',
			basiInfo: 'basicInfo',
			socialMedia: 'socialMedia',
			action: 'action'
		},
		{
			_id: '1',
			name: 'threya jha',
			image: 'image',
			basiInfo: 'basicInfo',
			socialMedia: 'socialMedia',
			action: 'action'
		},
		{
			_id: '1',
			name: 'threya jha',
			image: 'image',
			basiInfo: 'basicInfo',
			socialMedia: 'socialMedia',
			action: 'action'
		},
		{
			_id: '1',
			name: 'threya jha',
			image: 'image',
			basiInfo: 'basicInfo',
			socialMedia: 'socialMedia',
			action: 'action'
		}
	]);

	const fields = [
		{ key: 's.no' },
		{ key: 'category', _style: { width: '10%' } },

		{ key: 'question', filter: false, sorter: false, _style: { width: '20%' } },
		{ key: 'answer', _style: { width: '30%' } },
		{ key: 'correct answer', filter: false, sorter: false, _style: { width: '30%' } },
		{ key: 'image', filter: false, sorter: false }
	];

	const cardStyle = {
		backgroundColor: 'transparent',
		marginTop: '0px',
		marginLeft: '0px'
	};
	return (
		<React.Fragment>
			<CCard>
				<CCardHeader>
					 View Pyq
				</CCardHeader>
				<CCardBody>
					<CDataTable
						striped
						items={faculties}
						fields={fields}
						tableFilter
						itemsPerPageSelect
						itemsPerPage={5}
						hover
						sorter
						border
						outlined
						pagination
					/>
				</CCardBody>
			</CCard>
		</React.Fragment>
	);
}


