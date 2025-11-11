export const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Darul Hijrah Flayer.pdf';
  link.download = '/Darul Hijrah Flayer.pdf';
  link.click();
};
