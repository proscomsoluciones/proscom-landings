"use client";

import React, { useState, useTransition } from 'react';
import { useDemoModal } from './DemoModalContext';
import { sendContactEmail } from '@/app/actions/send-email';
import toast from 'react-hot-toast';

export default function DemoModal() {
  const { isOpen, closeModal, initialService } = useDemoModal();
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Effect to update service when modal opens or context changes
  React.useEffect(() => {
    if (isOpen && initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [isOpen, initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const submissionData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submissionData.append(key, value);
    });

    startTransition(async () => {
      const result = await sendContactEmail(submissionData);
      if (result.success) {
        toast.success(result.message);
        closeModal();
        setFormData({ name: '', organization: '', email: '', phone: '', service: '', message: '' });
      } else {
        toast.error(result.message);
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Helper to get readable service name
  const getServiceName = (val: string) => {
    switch(val) {
      case 'organizaciones': return 'Software para Organizaciones';
      case 'deporte': return 'Software Deportivo';
      case 'educacion': return 'Software Educativo';
      case 'agricultura': return 'Software Agrícola';
      case 'ganaderia': return 'Software Ganadero';
      case 'mineria': return 'Software Minero';
      case 'otro': return 'Otro';
      default: return val;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all scale-100">
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <h2 className="text-2xl font-bold text-slate-800">Solicita una demo</h2>
          <button 
            onClick={closeModal}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-slate-600 mb-6">
            Conoce cómo Proscom puede ayudarte a ordenar y controlar la gestión de tu organización.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={isPending}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50 placeholder:text-slate-500 text-slate-900"
                placeholder="Tu nombre completo"
              />
            </div>
            
            {/* Same fields for Organization, Email, Phone... keeping brevity in mind, assume they are there or I should replace them all correctly? I'll replace the block to be safe. */}
             <div>
              <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-1">Organización</label>
               <input
                type="text"
                id="organization"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                disabled={isPending}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50 placeholder:text-slate-500 text-slate-900"
                placeholder="Nombre de tu empresa u organización"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Correo</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isPending}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50 placeholder:text-slate-500 text-slate-900"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isPending}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50 placeholder:text-slate-500 text-slate-900"
                  placeholder="+56 9 ..."
                />
              </div>
            </div>

            {/* Service Selection - Pre-selected with "Otro" option */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Servicio de interés</label>
              {initialService ? (
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  disabled={isPending}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white disabled:opacity-50 text-slate-700"
                >
                  <option value={initialService}>{getServiceName(initialService)}</option>
                  <option value="otro">Otro</option>
                </select>
              ) : (
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  disabled={isPending}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white disabled:opacity-50 text-slate-700"
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="organizaciones">Software para Organizaciones</option>
                  <option value="deporte">Software Deportivo</option>
                  <option value="educacion">Software Educativo</option>
                  <option value="agricultura">Software Agrícola</option>
                  <option value="ganaderia">Software Ganadero</option>
                  <option value="mineria">Software Minero</option>
                  <option value="otro">Otro</option>
                </select>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensaje (opcional)</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                disabled={isPending}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none disabled:opacity-50 placeholder:text-slate-500 text-slate-900"
                placeholder="¿Alguna pregunta específica?"
              />
            </div>
            
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isPending ? 'Enviando...' : 'Solicitar demo'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
