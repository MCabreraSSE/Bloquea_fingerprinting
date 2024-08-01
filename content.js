// Falsificar el tamaño de pantalla y la zona horaria
Object.defineProperty(screen, 'width', { value: 1920 });
Object.defineProperty(screen, 'height', { value: 1080 });
Object.defineProperty(window, 'innerWidth', { value: 1920 });
Object.defineProperty(window, 'innerHeight', { value: 1080 });

const originalDate = Date;
function FakeDate() {
  return new originalDate('2020-01-01T00:00:00Z'); // Cambia la fecha y hora
}
FakeDate.prototype = originalDate.prototype;
window.Date = FakeDate;
