export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] text-[#ECECEC]/60 pt-24 pb-12 px-8 border-t border-[#ECECEC]/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-2">
          <h4 className="text-2xl font-medium tracking-tight text-[#ECECEC] mb-6">VEXA AI</h4>
          <p className="max-w-sm leading-relaxed text-sm">
            Diseñando la próxima era de la computación espacial cruzada con Inteligencia Artificial. Las nuevas gafas VEXA combinan hardware aeroespacial con algoritmos predictivos para cambiar la forma en la que ves el mundo.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 text-sm font-medium tracking-wide">
          <h5 className="text-[#ECECEC] mb-2 uppercase tracking-widest text-xs">Producto</h5>
          <a href="#" className="hover:text-[#ECECEC] transition-colors">VEXA Glass Series 1</a>
          <a href="#" className="hover:text-[#ECECEC] transition-colors">VEXA N1 Chip</a>
          <a href="#" className="hover:text-[#ECECEC] transition-colors">AR App Ecosystem</a>
        </div>
        
        <div className="flex flex-col gap-4 text-sm font-medium tracking-wide">
          <h5 className="text-[#ECECEC] mb-2 uppercase tracking-widest text-xs">Compañía</h5>
          <a href="#" className="hover:text-[#ECECEC] transition-colors">Manifiesto</a>
          <a href="#" className="hover:text-[#ECECEC] transition-colors">Noticias</a>
          <a href="#" className="hover:text-[#ECECEC] transition-colors">Contacto</a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest pt-8 border-t border-[#ECECEC]/10">
        <div className="mb-4 md:mb-0">© 2026 VEXA VISION. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#ECECEC] transition-colors">Privacidad</a>
          <a href="#" className="hover:text-[#ECECEC] transition-colors">Términos legales</a>
          <a href="#" className="hover:text-[#ECECEC] transition-colors">X (Twitter)</a>
          <a href="#" className="hover:text-[#ECECEC] transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
