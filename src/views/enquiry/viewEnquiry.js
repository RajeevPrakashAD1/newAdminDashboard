import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { CDataTable } from '@coreui/react';

const EnquiryApi = 'http://api.divetolearn.com/enquiry';

const ViewEnquiry = () => {
	const [ EnquiryData, setEnquiryData ] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await axios(EnquiryApi);
			// setEnquiryData(data.data);
            console.log(data.data);
            setEnquiryData(data.data);
		};

        getData();
        console.log("renderd");
        //
		
	}, []);

    const fields = [
        {key:"id"} ,

        { key:"name" },
    
        {key:"email",filter:false,sorter:false,_style: {width:"5%"}} ,
        {key:"phone"},
        {key:"message",filter:false,sorter:false,},
        {key:"created_at",filter:false,sorter:false},
        {key:"updated_at",filter:false,sorter:false}]






	return(
        <><h2 style={{marginBottom:"20px",borderBottom:"1px solid black"}}> View Enquiries</h2>

            <CDataTable  
                striped
               items={EnquiryData}
               fields = {fields}
               
                tableFilter
               
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                border
                outlined
                pagination
                />
         </>
    );
};

export default ViewEnquiry;
