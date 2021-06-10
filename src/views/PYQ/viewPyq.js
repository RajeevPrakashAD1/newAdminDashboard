import React, { useState } from 'react';
import {Link} from "react-router-dom"

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
import { InsertEmoticonSharp } from '@material-ui/icons';


export default function ViewPyqList() {
	const [ pyq ] = useState([
		{
			'id': '1',
			name: 'phreya jha',
            category:"category",
			image: 'image ',
			question: 'what is ur name',
            answer:["option 1","option 2" , "option 3" , "option 4"],
			correctAnswer:"option 2",
			action: 'action'
		},

		
	]);

	const fields = [
		{ key: 'id' },
		{ key: 'category', _style: { width: '10%' } },

		{ key: 'question', filter: false, sorter: false, _style: { width: '20%' } },
		{ key: 'answer', _style: { width: '30%' } },
		{ key: 'correctAnswer', filter: false, sorter: false, _style: { width: '30%' } },
		{ key: 'image', filter: false, sorter: false },
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
					 View Pyq
				</CCardHeader>
				<CCardBody>
					<CDataTable
						striped
						items={pyq}
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
							action: (item) => (
								<CContainer>
									<CButton>
										{' '}
										<DeleteIcon color="error" />
									</CButton>
                                    <Link to= {`/pyq/edit-pyq-question/${item.id}`}>
									<CButton onClick={()=>console.log(item)}>
									
										<CreateIcon color="primary" />{' '}
									</CButton> 
                                    </Link>
									<CButton color="success"> Active</CButton>
								</CContainer>
							),

                            answer:(item) =>(
                                <CContainer>
                                    {item.answer.map( (e,index) => <p>{`option${index+1} :  ${e} `} </p>  )}
                                </CContainer>
                            )
                        }}
					/>
				</CCardBody>
			</CCard>
		</React.Fragment>
	);
}


