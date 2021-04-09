import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Button';
// TODO: Update image when installer redesign is finished.
import InstallerImage from '../../assets/img/InstallerScreenshot.png';

export const Installer: React.FC = () => (
    <section className="relative w-screen flex flex-col 3xl:flex-row 3xl:justify-center items-center py-6 overflow-hidden bg-blue-dark">
        <div className="mt-10 max-w-2xl flex flex-col items-center 3xl:items-start text-center 3xl:text-left 3xl:mb-20 3xl:mr-12 space-y-4">
            <div className="inline-flex items-center justify-center p-3 bg-blue-light-contrast rounded-md shadow-lg">
                <FontAwesomeIcon icon={faBoxOpen} size="2x" />
            </div>
            <h1 className="text-5xl pt-4 text-white font-bold">
                Custom-built Installer
            </h1>
            <h1 className="text-xl text-gray-200">
                {/* eslint-disable-next-line max-len */}
                Our custom-built, open-source installer is where we keep our projects for you to easily install. Pick which branch you want to install, and the installer will automatically download it into the proper folder.
            </h1>
            <a href="https://api.flybywiresim.com/installer">
                <Button className="w-40 mt-4 bg-teal-light-contrast border-2 border-teal-light-contrast hover:bg-white hover:text-teal-light-contrast font-bold">Download</Button>
            </a>
        </div>
        <div className="w-11/12 xl:w-5/6 3xl:w-320 -mb-48 3xl:mb-0">
            <img className="w-full" src={InstallerImage} alt="Installer Image" />
        </div>
    </section>
);
