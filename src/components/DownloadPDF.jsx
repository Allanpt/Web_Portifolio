import './DownloadPDF.css'
import CurriculoPDF from './CurriculoAllanTavares.pdf';
import { Icon } from '@iconify/react';

function DownloadPDF() {

  const handleDownload = () => {
    
    window.open(CurriculoPDF, '_blank');
  };

  return (
    <div className='pdf-btn'>
      <a onClick={handleDownload} target="_blank" rel="noopener noreferrer"> Versão PDF <Icon icon="line-md:download-outline-loop" /></a>
    </div>
  );
}

export default DownloadPDF;
