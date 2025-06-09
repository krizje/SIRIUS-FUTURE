import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const useShareOrDownload = () => {
    const [isLoading, setIsLoading] = useState(false);

    const generatePdfBlob = async () => {
        const element = document.getElementById('sharable');
        if (!element) throw new Error('Элемент не найден');

        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF({
            unit: 'px',
            format: 'a4',
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const imgProps = pdf.getImageProperties(imgData);
        const imgWidth = pdfWidth;
        const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

        const pdfBlob = pdf.output('blob');
        return pdfBlob;
    };

    const handleShare = async () => {
        setIsLoading(true);
        try {
            const pdfBlob = await generatePdfBlob();
            const file = new File([pdfBlob], 'document.pdf', { type: 'application/pdf' });

            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    files: [file],
                    title: 'Поделиться PDF',
                    text: 'Вот мой документ',
                });
            } else {
                alert('Поделиться не поддерживается в этом браузере');
            }
        } catch {
            alert('Ошибка при генерации PDF');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownload = async () => {
        setIsLoading(true);
        try {
            const pdfBlob = await generatePdfBlob();
            const url = URL.createObjectURL(pdfBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'document.pdf';
            a.click();
            URL.revokeObjectURL(url);
        } catch {
            alert('Ошибка при генерации PDF');
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, handleShare, handleDownload };
};
