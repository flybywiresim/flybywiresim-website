import React, { forwardRef } from 'react';
import { CardBody, Card, CardTitle } from '../utils/Card';
import { faCogs, faCheck, faEye } from '@fortawesome/free-solid-svg-icons';

export const Features = forwardRef<HTMLDivElement>((_, ref): JSX.Element => (
    <>
        <div className="mx-auto divide-y divide-gray-500 max-w-2xl mt-12">
            <p className="mt-3 mb-4 pt-3 text-5xl text-center font-medium text-blue-light">
                Features
            </p>
            <p className="pt-5 text-center text-xl">
                The volunteers in our community work hard around the clock to consistently bring new features and improve the default A320. Let&apos;s take a look at some of the features the A32NX has to offer!
            </p>
        </div>
        <div id="features" className="bg-blue-darker bg-opacity-95 relative py-14">
            <div className="rounded-lg mx-auto px-4 py-4 text-center sm:px-6 lg:px-0 lg:w-4/5 lg:max-w-7xl">
                <div className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 space-y-2 lg:justify-center divide-y md:divide-x md:divide-y-0 divide-gray-500">
                        <Card icon={faCogs}>
                            <CardTitle>Accurate System Functionality</CardTitle>
                            <CardBody>The A32NX currently contains many system reworks that are true to life.</CardBody>
                        </Card>
                        <div className="pt-5 md:pt-0">
                            <Card icon={faEye}>
                                <CardTitle>Visual Fidelity</CardTitle>
                                <CardBody>The A32NX is packaged with multiple visual reworks including new lighting,
                                reworked textures, and model additions.</CardBody>
                            </Card>
                        </div>
                        <div className="pt-5 md:pt-0">
                            <Card icon={faCheck}>
                                <CardTitle>Verified by Real Pilots</CardTitle>
                                <CardBody>The A32NX has been analyzed and tested by hundreds of real A320 pilots for accuracy to real life.</CardBody>
                            </Card>
                        </div>

                    </div>
                    <div ref={ref} />
                </div>
            </div>
        </div>
    </>
));
