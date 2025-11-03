export const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/brosur-ppdb-darul-hijrah-2026.pdf';
  link.download = '/brosur-ppdb-darul-hijrah-2026.pdf';
  link.click();
};
