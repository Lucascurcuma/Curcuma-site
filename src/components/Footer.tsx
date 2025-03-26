import React from 'react';
import { Shield, Lock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Segurança</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Shield size={20} />
                <span>Site Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock size={20} />
                <span>Compra Protegida</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Úteis</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Central de Ajuda
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Atendimento</h3>
            <p className="mb-2">Segunda a Sexta, 9h às 18h</p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} ShopExpress. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};