import React from 'react'

function Card() {
  return (
    <>
      <div className='flex  justify-between items-center max-w-3xl p-4 mx-auto '>
      <div className="p-4 bg-gray-800 border border-gray-700 rounded-xl">
                <div className="flex items-center">
                    <img src="https://unavatar.now.sh/twitter/itsmarkmead" alt="Luc Perin Panta"className="w-16 h-16 rounded-full"/>
                    <div className="ml-3">
                    <h5 className="text-lg font-medium text-white">Mark Mead</h5>
                    <div className="flow-root">
                        <ul className="flex flex-wrap -m-1">
                        <li className="p-1 leading-none">
                            <a href="https://twitter.com/itsmarkmead"target="_blank" className="text-xs font-medium text-gray-300">
                            Twitter
                            </a>
                        </li>

                        <li className="p-1 leading-none">
                            <a href="https://github.com/pantaLuc" target="_blank"className="text-xs font-medium text-gray-300">
                            GitHub
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>

                <ul className="mt-4 space-y-2">
                    <li>
                    <a
                        href="https://github.com/andrewmcodes/hyperui"
                        target="_blank"
                        className="block h-full p-4 border border-gray-700 rounded-lg hover:border-pink-600"
                    >
                        <h5 className="font-medium text-white">Etudiant Master Informatique </h5>

                        <p className="mt-1 text-xs font-medium text-gray-300">
                        Genie de l' informatique Logiciel
                        </p>
                    </a>
                    </li>

                    <li>
                    
                    </li>
                </ul>
                </div>
                <div className="p-4 bg-gray-800 border border-gray-700 rounded-xl">
                <div className="flex items-center">
                    <img src="https://unavatar.now.sh/twitter/itsmarkmead" alt="Luc Perin Panta"className="w-16 h-16 rounded-full"/>
                    <div className="ml-3">
                    <h5 className="text-lg font-medium text-white">Mark Mead</h5>
                    <div className="flow-root">
                        <ul className="flex flex-wrap -m-1">
                        <li className="p-1 leading-none">
                            <a href="https://twitter.com/itsmarkmead"target="_blank" className="text-xs font-medium text-gray-300">
                            Twitter
                            </a>
                        </li>

                        <li className="p-1 leading-none">
                            <a href="https://github.com/pantaLuc" target="_blank"className="text-xs font-medium text-gray-300">
                            GitHub
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>

                <ul className="mt-4 space-y-2">
                    <li>
                    <a
                        href="https://github.com/andrewmcodes/hyperui"
                        target="_blank"
                        className="block h-full p-4 border border-gray-700 rounded-lg hover:border-pink-600"
                    >
                        <h5 className="font-medium text-white">Etudiant Master Informatique </h5>

                        <p className="mt-1 text-xs font-medium text-gray-300">
                        Genie de l' informatique Logiciel
                        </p>
                    </a>
                    </li>

                    <li>
                    
                    </li>
                </ul>
                </div>

      </div>
    </>
  )
}

export default Card