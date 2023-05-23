import React from 'react';

import { FaHospitalUser } from 'react-icons/fa';
import { FaFileMedical } from 'react-icons/fa';
import { MdOutlineVaccines} from 'react-icons/md';

const Card = () => {
  return (
    <div className="mt-8 grid grid-rows-2 lg:grid-rows-2 lg:grid-flow-col 
    md:grid-rows-2 md:grid-flow-col gap-9 pl-3 justify-center">
        {/* for the card that is in column 1 */}
        <div class="row-span-2  ">
            <div class="max-w-[550px] rounded shadow-lg ">
                <div class="px-6 py-4">
                    <div class=" -translate-y-11 left-0 right-0">
                         <div className="flex items-center">
                                <div className="flex-auto py-4 bg-slate-200 flex items-center">
                                <FaHospitalUser className="text-2xl mr-2 text-eswasthya-blue" />
                                    <div className="font-bold text-xl text-eswasthya-blue">
                                    Patient Information
                                    </div>
                                </div>
                          </div>
                    </div>
                        <div class="ml-8 mr-4 mb-4 ">
                        <span class="block">John Smith</span>
                        <span class="block "> john@example.com</span>
                        
                            <div class="mt-7">
                                <h1 class="text-gray-500" >Birth Date</h1>
                                <span class="block">9 Feb 2000</span>
                            </div>
                            <div class="mt-7">
                                <h1 class="text-gray-500">Height (in cm)</h1>
                                <span class="block">170 cm</span>
                            </div>
                            <div class="mt-7">
                                <h1 class="text-gray-500">Weight (in kg)</h1>
                                <span class="block">75 kg</span>
                            </div>
                            <div class="mt-7">
                                <h1 class="text-gray-500" >Gender</h1>
                                <button class="rounded-md h-10 px-4 text-lg bg-slate-200 text-eswasthya-blue">Male</button>
                            </div>
                            <div class="mt-7">
                                <h1 class="text-gray-500">Weight (in kg)</h1>
                                <span class="block">75 kg</span>
                            </div>
                            <div class="mt-7">
                                <h1 class="text-gray-500" >Gender</h1>
                                <button class="rounded-md h-10 px-5  text-lg bg-slate-200 text-eswasthya-blue">Male</button>
                            </div>
                        </div>
                </div>
            </div> 
        </div>
        {/* for the two cards that are in rows */}
        <div className="col-span-2 gap-4 ">
            {/* row 1 */}
            <div class="max-w-[550px] rounded shadow-lg ">
                <div class="px-6 py-4">
                     <div class=" -translate-y-11 left-0 right-0">
                        <div className="flex items-center">
                                <div className="flex-none py-4 bg-slate-200 flex items-center">
                                <FaFileMedical className="text-2xl mr-2 text-eswasthya-blue" />
                                    <div className="font-bold text-xl text-eswasthya-blue">
                                    Patient Medical History
                                    </div>
                                </div>
                        </div>
                     </div>
                    <div class="ml-8 mr-4 mb-4 ">
                    <span class="block">John Smith</span>
                    <span class="block pl-[0.2rem]"> john@example.com</span>
                    
                        <div class="mt-7">
                            <h1 >Birth Date</h1>
                            <span class="block">John Smith</span>
                        </div>
                        <div class="mt-7">
                            <h1 >Height</h1>
                            <span class="block">John Smith</span>
                        </div>
                        <div class="mt-7">
                            <h1 >Weight</h1>
                            <span class="block">John Smith</span>
                        </div>
                        <div class="mt-7">
                            <h1 >Gender</h1>
                            <span class="block">John Smith</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            {/* row 2 */}
        <div class="row-span-1 col-span-2 ">
            <div class="max-w-[550px] rounded shadow-lg ">
                <div class="px-6 py-4">
                    <div className="-translate-y-11 left-0 right-0">
                        <div className="flex items-center">
                            <div className="flex-none py-4 bg-slate-200 flex items-center">
                            <MdOutlineVaccines className="text-2xl mr-2 text-eswasthya-blue" />
                                <div className="font-bold text-xl text-eswasthya-blue">
                                    Vaccinations
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ml-8 mr-4 mb-4">
                    <span class="block">John Smith</span>
                    <span class="block pl-[0.2rem]"> john@example.com</span>
                    
                        <div class="mt-7">
                            <h1 >Birth Date</h1>
                            <span class="block">John Smith</span>
                        </div>
                        <div class="mt-7">
                            <h1 >Height</h1>
                            <span class="block">John Smith</span>
                        </div>
                        <div class="mt-7">
                            <h1 >Weight</h1>
                            <span class="block">John Smith</span>
                        </div>
                        <div class="mt-7">
                            <h1 >Gender</h1>
                            <span class="block">John Smith</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Card;
