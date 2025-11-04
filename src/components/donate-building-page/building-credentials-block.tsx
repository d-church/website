export function BuildingCredentialsBlock() {
  return (
    <div className="mx-auto mb-[70px] flex w-[calc(100%-40px)] flex-col items-center gap-[70px] px-4 xl:w-[1070px] xl:px-0">
      <div className="w-full rounded-sm border border-gray-200 p-5 shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="flex flex-col lg:items-start">
          <div className="mb-3 flex flex-1 items-center space-x-6">
            <div>
              <h3 className="mb-6 text-center text-2xl font-medium text-gray-900 lg:text-left">
                Реквізити:
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
            <div className="group">
              <p className="uppercase tracking-wide text-gray-700">
                Найменування отримувача
              </p>
              <p className="font-bold text-gray-800">
                РО ЦЕРКВА ДЖЕРЕЛО ЖИТТЯ
              </p>
            </div>
            <div className="group">
              <p className="uppercase tracking-wide text-gray-700">
                Код отримувача
              </p>
              <p className="font-bold text-gray-800">
                13806420
              </p>
            </div>
            <div className="group">
              <p className="uppercase tracking-wide text-gray-700">
                Рахунок отримувача
              </p>
              <p className="font-bold text-gray-800 break-all">
                UA333052990000026005031048170
              </p>
            </div>
            <div className="group">
              <p className="uppercase tracking-wide text-gray-700">
                Назва банку
              </p>
              <p className="font-bold text-gray-800">
                АТ КБ "ПРИВАТБАНК"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

