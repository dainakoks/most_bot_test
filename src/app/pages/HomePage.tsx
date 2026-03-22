import { useState } from "react";
import BridgeLogo from "../components/BridgeLogo";
import { Camera } from "lucide-react";

export default function HomePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    photo: null as string | null,
  });

  const isFormComplete = formData.firstName && formData.lastName && formData.birthDate && formData.photo;

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, photo: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="flex items-center justify-center mb-8 pt-6">
        <BridgeLogo color="red" size="md" />
      </div>

      <h1 className="font-['DRUZHOK'] text-4xl text-white text-center mb-8 uppercase">
        Паспорт театрала
      </h1>

      {/* Loyalty Card */}
      <div className="mb-8 relative">
        <div className={`bg-gradient-to-br ${isFormComplete ? 'from-[#96c1d1] to-[#7aa8ba]' : 'from-gray-600 to-gray-700'} rounded-2xl p-6 shadow-xl transition-all duration-500`}>
          <div className="flex items-center justify-between mb-4">
            <BridgeLogo color="white" size="sm" />
            <span className={`text-sm font-medium px-3 py-1 rounded-full ${isFormComplete ? 'bg-green-500 text-white' : 'bg-gray-500 text-gray-200'}`}>
              {isFormComplete ? 'Активна' : 'Неактивна'}
            </span>
          </div>
          
          {isFormComplete && (
            <div className="mt-4 text-white">
              <p className="text-xl font-medium">{formData.firstName} {formData.lastName}</p>
              <p className="text-sm opacity-80 mt-1">Дата рождения: {formData.birthDate}</p>
            </div>
          )}
          
          {!isFormComplete && (
            <p className="text-white/70 text-sm mt-2">Заполните данные для активации карты</p>
          )}
        </div>
      </div>

      {/* Form */}
      <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#96c1d1]/20">
        <h2 className="font-['DRUZHOK'] text-2xl text-white mb-6 uppercase">Ваши данные</h2>
        
        <div className="space-y-4">
          {/* Photo Upload */}
          <div className="flex flex-col items-center mb-6">
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
              />
              <div className="w-32 h-32 rounded-full bg-[#96c1d1]/20 border-2 border-[#96c1d1] flex items-center justify-center overflow-hidden hover:bg-[#96c1d1]/30 transition-colors">
                {formData.photo ? (
                  <img src={formData.photo} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <Camera className="w-12 h-12 text-[#96c1d1]" />
                )}
              </div>
            </label>
            <p className="text-sm text-[#96c1d1] mt-2">Загрузить фото</p>
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm text-[#96c1d1] mb-2">Имя</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
              className="w-full bg-black/50 border border-[#96c1d1]/40 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#DA1F25] focus:outline-none transition-colors"
              placeholder="Введите имя"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm text-[#96c1d1] mb-2">Фамилия</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
              className="w-full bg-black/50 border border-[#96c1d1]/40 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#DA1F25] focus:outline-none transition-colors"
              placeholder="Введите фамилию"
            />
          </div>

          {/* Birth Date */}
          <div>
            <label className="block text-sm text-[#96c1d1] mb-2">Дата рождения</label>
            <input
              type="date"
              value={formData.birthDate}
              onChange={(e) => setFormData(prev => ({ ...prev, birthDate: e.target.value }))}
              className="w-full bg-black/50 border border-[#96c1d1]/40 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#DA1F25] focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
