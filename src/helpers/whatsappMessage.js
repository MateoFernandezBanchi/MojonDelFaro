export const whatsappMessage = (message) => {
    console.log('hello');
    if (window.innerWidth <= 768) {
      // Dispositivo móvil, abre el enlace de WhatsApp móvil
      window.open(`https://wa.me/+542216164448?text=${message}, '_blank`);
    } else {
      // Escritorio, abre el enlace de WhatsApp Web
      window.open(`https://web.whatsapp.com/send?phone=+542216164448&text=${message}`);
    }
  }