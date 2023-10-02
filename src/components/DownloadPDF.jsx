import './DownloadPDF.css'
import CurriculoPDF from './CurriculoAllanTavares.pdf';

function DownloadPDF() {

  const handleDownload = () => {
    
    window.open(CurriculoPDF, '_blank');
  };

  return (
    <div className='pdf-btn'>
      <a onClick={handleDownload} target="_blank" rel="noopener noreferrer"> Versão PDF</a>
    </div>
  );
}

export default DownloadPDF;
