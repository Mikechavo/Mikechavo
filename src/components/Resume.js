import React from 'react';
import { Document, Page } from 'react-pdf';
import { Card, Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter, CardBody } from "reactstrap";

const Resume = () => {
  const resumePath = process.env.PUBLIC_URL + '/resume/MichaelChavez_Resume_Mar_2024_Design_new.pdf';
  
  return (
    <section className='container'>
      <div className='Skills'>
      <div className="resume-download">
          <a href={resumePath} download="MichaelChavez_Resume_mar_2024.pdf">
            <Button color="primary">Download Resume</Button>
          </a>
        </div>
        <Document file={resumePath}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </section>
  );
};

export default Resume;


// // Import necessary components and styles
// import React from 'react';
// import { Document, Page } from 'react-pdf';
// import { Card, Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

// const Resume = () => {
//   const resumePath = process.env.PUBLIC_URL + '/resume/MichaelChavez_Resume_Jan_2024.pdf';

//   return (
//     <div className='cards'>
//       <Card color="" style={{ width: '40rem' }}>
//         <h2>My Resume</h2>
//         <Document file={resumePath}>
//           {/* Customize the style of the Page component */}
//           <Page 
//             pageNumber={1}
//             style={{
//               display: 'block',
//               userSelect: 'none',
//               width: '100%', // Set the width to 100% for full width
//               height: 'auto', // Automatically adjust the height
//             }}
//           />
//         </Document>
//       </Card>
//     </div>
//   );
// };

// export default Resume;