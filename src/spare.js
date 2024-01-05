<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

      
<div className="rounded-lg p-4 shadow-md rounded-lg p-4 shadow-md border border-indigo-600">
  <div className="bg-gradient-to-r from-blue-300 to-blue-400 h-64 w-full object-cover rounded-lg p-4 shadow-md">
  {!imageSrc[0] && (
    <label
      htmlFor="ImageInput"
      className="mb-1 p-3 rounded-md bg-gradient-to-r from-blue-300 to-blue-400 text-white cursor-pointer"
    >
      Choose Image
    </label>
  )}
  <input
    id="ImageInput"
    type="file"
    onChange={handleFileChange}
    className="hidden"
  />
  {imageSrc[0] && (
    <img
      src={imageSrc[0]}
      className=" flex   object-contain"
    />
  )}
  </div>
  <div className="bg-gray-100 p-4 ">
    <div className="flex gap-9">
    <h3 className="text-center text-xl font-bold">Red     </h3>
    <span className=" text-lg text-gray-400">: value from json</span>
    </div>
    <div className="flex gap-3">
    <h3 className="text-center text-xl font-bold">Yellow    </h3>
    <span className=" text-lg text-gray-400">: value from json</span>
    </div>
    <div className="flex gap-4">
    <h3 className="text-center text-xl font-bold">Green    </h3>
    <span className=" text-lg text-gray-400">: value from json</span>
    </div>
  </div>
</div>
<div className="rounded-lg p-4 shadow-md rounded-lg p-4 shadow-md border border-indigo-600">
  <div className="bg-blue-500 h-64 w-full object-cover rounded-lg p-4 shadow-md">
  {!imageSrc[1] && (
    <label
      htmlFor="ImageInput"
      className="mb-1 p-3 rounded-md bg-blue-500 text-white cursor-pointer"
    >
      Choose Image
    </label>
  )}
  <input
    id="ImageInput"
    type="file"
    onChange={handleFileChange}
    className="hidden"
  />
  {imageSrc[1] && (
    <img
      src={imageSrc[1]}
      className=" flex   object-contain"
    />
  )}
  </div>
  <div className="bg-gray-100 p-4 ">
    <div className="flex gap-9">
    <h3 className="text-center text-xl font-bold">Red     </h3>
    <span className=" text-lg text-gray-400">: value from json</span>
    </div>
    <div className="flex gap-3">
    <h3 className="text-center text-xl font-bold">Yellow    </h3>
    <span className=" text-lg text-gray-400">: value from json</span>
    </div>
    <div className="flex gap-4">
    <h3 className="text-center text-xl font-bold">Green    </h3>
    <span className=" text-lg text-gray-400">: value from json</span>
    </div>
  </div>
</div>

<div className="rounded-lg p-4 shadow-md rounded-lg p-4 shadow-md border border-indigo-600">
  <div className="bg-blue-500 h-64 w-full object-cover rounded-lg p-4 shadow-md">
  {!imageSrc[2] && (
    <label
      htmlFor="ImageInput"
      className="mb-1 p-3 rounded-md bg-blue-500 text-white cursor-pointer"
    >
      Choose Image
    </label>
  )}
  <input
    id="ImageInput"
    type="file"
    onChange={handleFileChange}
    className="hidden"
  />
  {imageSrc[2] && (
    <img
      src={imageSrc[2]}
      className=" flex   object-contain"
    />
  )}
  </div>
  <div className="bg-gray-100 p-4 ">
    <div className="flex gap-9">
    <h3 className="text-center text-xl font-bold">Red     </h3>
    <span className=" text-lg text-gray-400">: value from json</span>
    </div>
    <div className="flex gap-3">
    <h3 className="text-center text-xl font-bold">Yellow    </h3>
    <span className=" text-lg text-gray-400">: value from json</span>
    </div>
    <div className="flex gap-4">
    <h3 className="text-center text-xl font-bold">Green    </h3>
    <span className=" text-lg text-gray-400">: value from json</span>
    </div>
  </div>
</div>


<div className="rounded-lg p-4 shadow-md rounded-lg p-4 shadow-md border border-indigo-600">
  <div className="bg-blue-500 h-64 w-full object-cover rounded-lg p-4 shadow-md">
  {!imageSrc[3] && (
    <label
      htmlFor="ImageInput"
      className="mb-1 p-3 rounded-md bg-blue-500 text-white cursor-pointer"
    >
      Choose Image
    </label>
  )}
  <input
    id="ImageInput"
    type="file"
    onChange={handleFileChange}
    className="hidden"
  />
  {imageSrc[3] && (
    <img
      src={imageSrc[3]}
      className=" flex   object-contain"
    />
  )}
  </div>
  <div className="bg-gray-100 p-4 ">
    <div className="flex gap-9">
    <h3 className="text-center text-xl font-bold">Red     </h3>
    <span className=" text-lg text-gray-400">: value from json</span>
    </div>
    <div className="flex gap-3">
    <h3 className="text-center text-xl font-bold">Yellow    </h3>
    <span className=" text-lg text-gray-400">: value from json</span>
    </div>
    <div className="flex gap-4">
    <h3 className="text-center text-xl font-bold">Green    </h3>
    <span className=" text-lg text-gray-400">: value from json</span>
    </div>
  </div>
</div>





</div>