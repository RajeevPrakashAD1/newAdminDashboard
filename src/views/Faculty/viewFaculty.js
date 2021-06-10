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

import FacultyImage from './facultyimage';
function ViewFaculty() {
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
		{ key: '_id' },
		{ key: 'name', _style: { width: '10%' } },

		{ key: 'image', filter: false, sorter: false, _style: { width: '20%' } },
		{ key: 'basicInfo', _style: { width: '30%' } },
		{ key: 'socialMedia', filter: false, sorter: false, _style: { width: '30%' } },
		{ key: 'action', filter: false, sorter: false }
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
					 View Faculty
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
						scopedSlots={{
							name: (item) => (
								<td>
									<h6> {item.name} </h6>
								</td>
							),

							image: (item2) => (
								<td>
									{' '}
									<FacultyImage />{' '}
								</td>
							),

							basicInfo: (item) => (
								<CCard style={cardStyle}>
									<CCardBody>
										<CCardTitle>Skills</CCardTitle>
										<CCardSubtitle>Subtitle.</CCardSubtitle>
										<CCardTitle>Skills</CCardTitle>
										<CCardSubtitle>Subtitle.</CCardSubtitle>
									</CCardBody>
								</CCard>
							),

							action: (item) => (
								<CContainer>
									<CButton>
										{' '}
										<DeleteIcon color="error" />
									</CButton>
									<CButton>
										{' '}
										<CreateIcon color="primary" />{' '}
									</CButton>
									<CButton color="success"> Active</CButton>
								</CContainer>
							),
							socialMedia: (item) => (
								<td>
									<CCard style={cardStyle}>
										<CCardBody>
											<CCardTitle>Skills</CCardTitle>
											<CCardSubtitle>Subtitle.</CCardSubtitle>
											<CCardTitle>Skills</CCardTitle>
											<CCardSubtitle>Subtitle.</CCardSubtitle>
											<CCardTitle>Skills</CCardTitle>
											<CCardSubtitle>Subtitle.</CCardSubtitle>
										</CCardBody>
									</CCard>
								</td>
							)
						}}
					/>
				</CCardBody>
			</CCard>
		</React.Fragment>
	);
}

export default ViewFaculty;
