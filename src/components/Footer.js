/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../images/logo.png'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Footer() {
    return (
        <Disclosure as="footer" className="bg-gray-900 border-t border-gray-700">

            <div className="max-w-7xl mx-auto px-2 sm:px-6 pt-8">
                <div className="relative flex items-center justify-between">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="flex items-center">
                            <img
                                className=":block h-28"
                                src={logo}
                                alt="Workflow"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mb-8">
                <div className="relative flex items-center justify-between">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="flex items-center">
                            <h1 className="text-white font-medium text-3xl">DDU Eco Club</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto pt-8 pb-2">
                <div className="relative flex items-center justify-between">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="flex items-center ">
                            <h1 className="text-slate-400 font-medium text-sm">Copyright © 2022, DDU Eco Club | Developed with ❤️</h1>
                        </div>
                    </div>
                </div>
            </div>

        </Disclosure>
    )
}