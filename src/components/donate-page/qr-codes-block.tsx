import { useTranslations } from "next-intl";
import Image from "next/image";


export function QrCodesBlock() {
  const t = useTranslations();
  return (
    <>
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            <div className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-gray-100 group">
                <div className="flex items-start space-x-6">
                    <div className="flex-1">
                        <h3 className="text-2xl font-medium text-gray-900 mb-3">LiqPay</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Швидко та безпечно через платіжну систему LiqPay. 
                            Підтримка карт Visa та Mastercard.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-8 rounded-2xl transition-all duration-200 group-hover:scale-105">
                            Пожертвувати
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-gray-100 group">
                <div className="flex items-start space-x-6">
                    <div className="flex-1">
                        <h3 className="text-2xl font-medium text-gray-900 mb-3">Пожертвувати на служіння</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Підтримайте конкретні проекти та служіння церкви. 
                            Оберіть напрямок для вашої пожертви.
                        </p>
                        <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-4 px-8 rounded-2xl transition-all duration-200 group-hover:scale-105">
                            Обрати служіння
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-gray-100 lg:col-span-2">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    <div className="flex items-center space-x-6 mb-6 lg:mb-0">
                        <div>
                            <h3 className="text-2xl font-medium text-gray-900 mb-2">Банківський переказ</h3>
                            <p className="text-gray-600">Переказ через банк або онлайн-банкінг</p>
                        </div>
                    </div>
                    
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Отримувач</span>
                                <p className="text-gray-900 mt-1">Релiгiйна органiзацiя "Джерело Життя, місто Львів"</p>
                            </div>
                            
                            <div>
                                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">ЄДРПОУ</span>
                                <p className="text-gray-900 font-mono text-lg">13806420</p>
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <div>
                                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Банк</span>
                                <p className="text-gray-900">АТ КБ "ПРИВАТБАНК"</p>
                            </div>
                            
                            <div>
                                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">IBAN</span>
                                <p className="text-gray-900 font-mono text-sm cursor-pointer hover:text-blue-600 transition-colors" id="iban">
                                    UA133052990000026000001008576
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl">
                    <div className="flex items-center">
                        <i className="fas fa-exclamation-circle text-amber-600 mr-3"></i>
                        <div>
                            <span className="font-medium text-amber-800">Призначення платежа:</span>
                            <span className="text-amber-700 ml-2">ДОБРОВІЛЬНІ ПОЖЕРТВУВАННЯ</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-gray-100 lg:col-span-2">
                <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
                    <div className="flex items-center space-x-6 mb-6 lg:mb-0">
                        <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <i className="fas fa-qrcode text-indigo-500 text-2xl"></i>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium text-gray-900 mb-2">Privat24</h3>
                            <p className="text-gray-600">Відскануйте QR-код у додатку для миттєвого переказу</p>
                        </div>
                    </div>
                    
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="w-40 h-40 bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center">
                            <i className="fas fa-qrcode text-gray-300 text-4xl mb-2"></i>
                            <p className="text-sm text-gray-400 text-center">QR код<br/>Privat24</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center gap-[65px] lg:flex-row lg:gap-[100px] xl:justify-normal xl:gap-[305px]">
      <div className="mb-[65px] flex flex-col items-center md:w-[434px] lg:mb-0">
        <div className="mb-[45px] flex items-center justify-center gap-[95px] lg:flex-col lg:gap-0">
          <p className="text-[5rem]/[5rem] font-thin lg:mb-[18px]">UA</p>
          <Image src="/static/qr-code.webp" alt="" width={118} height={118} />
        </div>
        <p className="text-center text-xl/[1.875rem] text-gray">
          {t("donate-page.qr-codes-block.ua-qr")}
        </p>
      </div>
    </div>
    </>
    
  );
}
